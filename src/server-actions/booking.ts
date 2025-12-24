"use server"

import { checkPermission } from "@/configs/auth"
import db from "@/configs/db"
import resend from "@/configs/resend"
import { bookingClientSchema } from "@/validators/booking"
import SuccessBooking from "emails/success-booking"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function getMovies() {
  return await db.movie.findMany({
    select: { id: true, title: true, posterUrl: true, durationInMins: true },
  })
}

export async function getShows(movieId: string) {
  return await db.show.findMany({
    where: {
      movieId,
    },
    orderBy: { startTime: "asc" },
  })
}

export async function getSeats(showId: string) {
  return await db.seat.findMany({
    include: {
      showSeatRelation: {
        where: {
          showId,
        },
      },
    },
  })
}

export async function getCheckout({
  movieId,
  showId,
  seatIds,
}: {
  movieId: string
  showId: string
  seatIds: string[]
}) {
  const movie = await db.movie.findUnique({ where: { id: movieId } })
  const show = await db.show.findUnique({ where: { id: showId, movieId } })
  const seats = await db.seat.findMany({
    where: { id: { in: seatIds } },
  })

  return { movie, show, seats }
}
export async function makeBooking(data: {
  movieId: string
  showId: string
  seatIds: string[]
  email: string
}) {
  const { movieId, showId, seatIds, email } = bookingClientSchema.parse(data)

  const booking = await db.$transaction(async (tx) => {
    const movie = await tx.movie.findUnique({
      where: { id: movieId },
    })

    const show = await tx.show.findUnique({
      where: { id: showId, movieId },
    })

    if (!movie || !show) {
      throw new Error("Invalid movie or show")
    }
    const seats = await tx.seat.findMany({
      where: {
        id: { in: seatIds },
        showSeatRelation: {
          some: { showId, status: "available" },
        },
      },
    })

    if (seats.length !== seatIds.length) {
      throw new Error("One or more seats already booked")
    }
    const booking = await tx.booking.create({
      data: {
        email,
        totalAmount: 0,
      },
    })
    const tickets = seats.map((s) => ({
      amount: s.price,
      bookingId: booking.id,
      showId,
      seatId: s.id,
    }))

    await tx.ticket.createMany({ data: tickets })
    await tx.showSeatRelation.updateMany({
      where: {
        showId,
        seatId: { in: seatIds },
        status: "available", // extra safety
      },
      data: { status: "purchased" },
    })
    const totalAmount = seats.reduce((sum, s) => sum + s.price, 0)

    return await tx.booking.update({
      where: { id: booking.id },
      data: { totalAmount },
    })
  })
  redirect("/success?bookingId=" + booking.id)
}

export async function deleteBooking(id: string) {
  const isAllow = await checkPermission()
  if (!isAllow) return { success: false, message: "Permission denied." }

  try {
    const tickets = await db.ticket.findMany({ where: { bookingId: id } })
    const seatIds = tickets.map((t) => t.seatId)
    const showId = tickets[0].showId

    // set status available to all seats related to show
    await db.showSeatRelation.updateMany({
      where: { showId, seatId: { in: seatIds } },
      data: { status: "available" },
    })

    // delete tickets
    await db.ticket.deleteMany({ where: { bookingId: id } })

    // delete booking
    const booking = await db.booking.delete({ where: { id } })
    revalidatePath("/dashboard/bookings")
    return { success: true, data: booking.id }
  } catch (error) {
    return { success: false, message: "Something went wrong." }
  }
}

export async function markBookingAsPaid(bookingId: string, amount: number) {
  console.log("🔥 paid() CALLED with bookingId:", bookingId)
  const booking = await db.booking.findUnique({ where: { id: bookingId } })
  if (!booking || booking.status === "paid") return

  const updatedBooking = await db.booking.update({
    where: { id: bookingId },
    data: { status: "paid" },
    include: {
      tickets: {
        include: {
          show: {
            include: {
              movie: true,
            },
          },
          seat: true,
        },
      },
    },
  })

  await resend.emails.send({
    from: "MovieHub <onboarding@resend.dev>", //process.env.RESEND_DOMAIN!
    to: "sam982024kk@gmail.com", //updatedBooking.email
    subject: "Thanks for your booking.",
    react: SuccessBooking({ booking: updatedBooking }),
  })

  revalidatePath("/success?bookingId=" + bookingId)
}

export const fetchDashboardBookings = async (filter: "all" | "paid" | "unpaid") => {
  let where = {}

  if (filter === "paid") where = { status: "paid" }
  else if (filter === "unpaid") where = { status: "unpaid" }

  return await db.booking.findMany({
    include: {
      tickets: {
        include: {
          seat: {
            select: {
              class: true,
              row: true,
              number: true,
            },
          },
          show: {
            include: {
              movie: {
                select: {
                  title: true,
                },
              },
            },
          },
        },
      },
    },
    where,
    orderBy: {
      createdAt: "desc",
    },
  })
}
