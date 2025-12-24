import { faker } from "@faker-js/faker"
import { Prisma, PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import "dotenv/config"

// Environment variables check
if (!process.env.ADMIN_PASSWORD) throw new Error("ADMIN_PASSWORD is not set")
if (!process.env.ADMIN_USERNAME) throw new Error("ADMIN_USERNAME is not set")
if (!process.env.CUSTOMER_EMAIL_SEED) throw new Error("CUSTOMER_EMAIL_SEED is not set")
if (!process.env.MOVIE_POSTER_SEED) throw new Error("MOVIE_POSTER_SEED is not set")

const db = new PrismaClient()

// -------------------- Seed Admin User --------------------
const seedUser = async () => {
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD!, 10)
  console.log("Seeding admin user...")
  await db.user.create({
    data: {
      username: process.env.ADMIN_USERNAME!,
      role: "admin",
      password: hashedPassword,
    },
  })
}

// -------------------- Seed Movies --------------------
const seedMovies = async () => {
  console.log("Seeding movies...")
  const movies: Prisma.MovieCreateManyInput[] = []

  for (let i = 0; i < 5; i++) {
    movies.push({
      title: faker.music.songName(),
      description: faker.commerce.productDescription(),
      posterUrl: process.env.MOVIE_POSTER_SEED!,
      genre: faker.music.genre(),
      durationInMins: faker.number.int({ min: 60, max: 180 }),
      releaseDate: faker.date.soon({ days: 7 }),
    })
  }

  await db.movie.createMany({ data: movies })
}

// -------------------- Seed Seats --------------------
const seedSeats = async () => {
  console.log("Seeding seats...")
  const rows = "ABCDEF"
  const seats: Prisma.SeatCreateManyInput[] = []

  for (let i = 0; i < 6; i++) {
    let seatClass = "front"
    let price = 7
    if (i === 2 || i === 3) {
      seatClass = "mid"
      price = 13
    }
    if (i === 4 || i === 5) {
      seatClass = "vip"
      price = 20
    }

    for (let j = 1; j <= 10; j++) {
      seats.push({
        class: seatClass,
        row: rows[i],
        number: j,
        price,
      })
    }
  }

  await db.seat.createMany({ data: seats })
}

// -------------------- Seed Shows & ShowSeatRelations --------------------
const seedShows = async () => {
  console.log("Seeding shows and show-seat relations...")
  const movies = await db.movie.findMany()
  const seats = await db.seat.findMany()

  for (const movie of movies) {
    for (let i = 0; i < 5; i++) {
      const showDate = faker.date.soon({ days: 7, refDate: movie.releaseDate })
      showDate.setHours(0, 0, 0, 0)
      const startTime = new Date(showDate)
      startTime.setHours(faker.number.int({ min: 8, max: 16 }))
      const endTime = new Date(startTime)
      endTime.setHours(startTime.getHours() + 2)

      const show = await db.show.create({
        data: {
          movieId: movie.id,
          date: showDate,
          startTime,
          endTime,
        },
      })

      // Create show-seat relations
      const showSeatRelations: Prisma.ShowSeatRelationCreateManyInput[] = seats.map((seat) => ({
        showId: show.id,
        seatId: seat.id,
        status: "available",
      }))

      await db.showSeatRelation.createMany({ data: showSeatRelations })
    }
  }
}

// -------------------- Seed Bookings & Tickets --------------------
const seedBookingsAndTickets = async () => {
  console.log("Seeding bookings and tickets...")
  const bookings: Prisma.BookingCreateManyInput[] = []
  const dbShows = await db.show.findMany()
  const seats = await db.seat.findMany()

  // Create bookings
  for (let i = 0; i < 5; i++) {
    bookings.push({ email: process.env.CUSTOMER_EMAIL_SEED!, totalAmount: 0 })
  }

  await db.booking.createMany({ data: bookings })
  const dbBookings = await db.booking.findMany()

  for (const booking of dbBookings) {
    let totalAmount = 0
    const ticketsToCreate: Prisma.TicketCreateManyInput[] = []

    // Randomly pick a show for the booking
    const show = dbShows[faker.number.int({ min: 0, max: dbShows.length - 1 })]

    // Pick 1–5 random seats
    const seatCount = faker.number.int({ min: 1, max: 5 })
    const availableSeats = await db.showSeatRelation.findMany({
      where: { showId: show.id, status: "available" },
      include: { seat: true },
    })

    for (let i = 0; i < seatCount && availableSeats.length > 0; i++) {
      const seatIndex = faker.number.int({ min: 0, max: availableSeats.length - 1 })
      const chosenSeat = availableSeats.splice(seatIndex, 1)[0]

      ticketsToCreate.push({
        bookingId: booking.id,
        showId: show.id,
        seatId: chosenSeat.seatId,
        amount: chosenSeat.seat.price,
      })

      totalAmount += chosenSeat.seat.price
    }

    await db.ticket.createMany({ data: ticketsToCreate })
    await db.booking.update({ where: { id: booking.id }, data: { totalAmount } })

    // Mark seats as purchased
    for (const ticket of ticketsToCreate) {
      await db.showSeatRelation.updateMany({
        where: { showId: ticket.showId, seatId: ticket.seatId },
        data: { status: "purchased" },
      })
    }
  }
}

// -------------------- Main --------------------
const main = async () => {
  console.log("Cleaning database...")
  await db.user.deleteMany()
  await db.showSeatRelation.deleteMany()
  await db.ticket.deleteMany()
  await db.seat.deleteMany()
  await db.booking.deleteMany()
  await db.show.deleteMany()
  await db.movie.deleteMany()

  await seedUser()
  await seedMovies()
  await seedSeats()
  await seedShows()
  await seedBookingsAndTickets()

  console.log("✅ Database seeding completed!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
