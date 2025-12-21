"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"
const images = [
  "/hero-image4.jpg",
  "/hero-image5.jpg",
  "/hero-image6.jpg",
  "/hero-image3.jpg",
  "/hero-image.jpg",
]
const Hero = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setIndex(api.selectedScrollSnap())

    api.on("select", () => {
      setIndex(api.selectedScrollSnap())
    })
  }, [api])
  return (
    <>
      <section className="relative mb-12 h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <span className="sr-only">Background Image</span>
          <Carousel
            opts={{
              loop: true,
            }}
            setApi={setApi}
            className="relative h-screen w-full">
            <CarouselContent className="h-screen w-full">
              {images.map((img, i) => (
                <CarouselItem key={i} className="h-screen w-full">
                  <Card className="border-none">
                    <CardContent className="relative h-screen w-full p-0">
                      <Image
                        src={img}
                        alt="Hero Slide"
                        fill
                        className="object-cover"
                        priority={i === 0}
                      />
                      <div className="absolute inset-0 bg-black/50" />

                      <div className="absolute inset-0 flex items-center justify-center"></div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-4 top-1/2 z-20" />
            <CarouselNext className="absolute right-4 top-1/2 z-20" />
          </Carousel>

          {/* Pagination Dots */}
          <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-4 w-4 rounded-full transition 
              ${i === index ? "bg-white" : "bg-white/40 hover:bg-white/60"}
            `}
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/90"></div>
        </div>

        <div className="container relative flex h-full items-center">
          <div className="space-y-2 text-white">
            <h3 className="text-3xl font-bold md:text-5xl">Movie Booking System</h3>
            <p className="md:text-xl">Web based application for online booking.</p>
            <div className="pt-4">
              <Button asChild>
                <Link href="/booking">Booking</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
