"use client"
import * as React from "react"

interface CarouselProps<T> {
  items: T[]
  render: (item: T, isCenter: boolean) => React.ReactNode
  interval?: number
}

const CarouselCenterSliding = <T,>({ items, render, interval = 3000 }: CarouselProps<T>) => {
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (items.length <= 1) return
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length)
    }, interval)
    return () => clearInterval(id)
  }, [items.length, interval])

  // Calculate visible indices
  const prevIndex = (current - 1 + items.length) % items.length
  const nextIndex = (current + 1) % items.length

  return (
    <div className="sm:h[400px] relative h-[400px] w-full overflow-hidden md:h-[500px] lg:h-[700px]">
      {items.map((item, i) => {
        let left = "100%" // hidden default
        let scale = 0.8
        let opacity = 0
        let zIndex = 0

        if (i === current) {
          left = "50%"
          scale = 1
          opacity = 1
          zIndex = 20
        } else if (i === prevIndex) {
          left = "25%"
          scale = 0.9
          opacity = 0.5
          zIndex = 10
        } else if (i === nextIndex) {
          left = "75%"
          scale = 0.9
          opacity = 0.5
          zIndex = 10
        }

        return (
          <div
            key={i}
            className="absolute top-0 transition-all duration-700 ease-in-out"
            style={{
              left,
              transform: `translateX(-50%) scale(${scale})`,
              opacity,
              zIndex,
              width: "33%",
            }}>
            {render(item, i === current)}
          </div>
        )
      })}
    </div>
  )
}

export default CarouselCenterSliding
