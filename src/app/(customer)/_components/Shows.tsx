"use client"
import TitleTypography from "@/components/TitleTypography"
import { Button } from "@/components/ui/button"
import Carousel from "../_components/ui/Carousel"

import { Prisma } from "@prisma/client"
import { format } from "date-fns"
import Image from "next/image"
import Link from "next/link"

interface Props {
  shows: Prisma.ShowGetPayload<{ include: { movie: true } }>[]
}

const Shows = ({ shows }: Props) => {
  if (!shows || shows.length === 0) {
    return (
      <section className="mb-12">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold">Shows Time</h2>
          <p>Currently, no shows found.</p>
        </div>
      </section>
    )
  }
  return (
    <>
      <section className="mb-12">
        <div className="container">
          <TitleTypography>Shows Time</TitleTypography>
        </div>
        {shows.length > 0 ? (
          <Carousel
            items={shows}
            interval={3000}
            render={(show) => {
              return (
                <div className="m-4 flex select-none flex-col items-center">
                  <div className="relative aspect-[2/3] w-full max-w-[350px] overflow-hidden rounded-lg">
                    <Link href={`/movies/${show.movie.title.replaceAll(" ", "_")}`}>
                      <Image
                        src={show.movie.posterUrl}
                        alt={`Poster of ${show.movie.title}`}
                        width={200}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </Link>
                  </div>

                  <div className="p-2 text-center">
                    <h6 className="mb-2 text-xl font-semibold transition-colors hover:text-primary">
                      <Link href={`/movies/${show.movie.title.replaceAll(" ", "_")}`}>
                        {show.movie.title}
                      </Link>
                    </h6>
                    <p>
                      {format(show.startTime, "hh:mm a")} - {format(show.endTime, "hh:mm a")}
                    </p>
                    <p>{format(show.date, "MMM d, yyyy")}</p>
                    <Button className="mt-2" asChild>
                      <Link href={`/booking?movieId=${show.movie.id}&showId=${show.id}`}>
                        Book Now
                      </Link>
                    </Button>
                  </div>
                </div>
              )
            }}
          />
        ) : (
          <div className="container">Currently, no shows found.</div>
        )}
      </section>
    </>
  )
}

export default Shows
