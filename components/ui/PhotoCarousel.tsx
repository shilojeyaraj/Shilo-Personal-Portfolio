'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

type Props = {
  images: string[]
  className?: string
  rounded?: string
}

export default function PhotoCarousel({ images, className = '', rounded = 'rounded-2xl' }: Props) {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null)
  const [index, setIndex] = React.useState(0)

  const toSrc = (s: string) => {
    if (!s) return ''
    // allow external urls or local assets; normalize relative local paths
    if (/^https?:\/\//i.test(s)) return s
    return s.startsWith('/') ? s : `/${s.replace(/^public\//, '')}`
  }

  React.useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const onScroll = () => {
      const w = el.clientWidth
      setIndex(Math.round(el.scrollLeft / w))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (i: number) => {
    scrollerRef.current?.scrollTo({ left: i * (scrollerRef.current?.clientWidth || 0), behavior: 'smooth' })
  }
  const next = () => scrollTo(Math.min(index + 1, images.length - 1))
  const prev = () => scrollTo(Math.max(index - 1, 0))

  return (
    <div className={`relative ${className}`}>
      <div
        ref={scrollerRef}
        className={`overflow-x-auto ${rounded} border bg-gradient-to-br from-primary/20 to-purple-500/20
                    snap-x snap-mandatory scroll-smooth touch-pan-x
                    [scrollbar-width:none] [-ms-overflow-style:none]`}
      >
        <style jsx>{`div::-webkit-scrollbar{display:none}`}</style>

        <div className="flex">
          {images
            .map(toSrc)
            .filter(Boolean)
            .map((src, i) => (
              <div key={i} className="relative w-full shrink-0 snap-center">
                <div className="relative aspect-square">
                  <Image
                    src={src}
                    alt={`Shilo photo ${i + 1}`}
                    fill
                    className={`${rounded} object-cover`}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={i === 0}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* arrows */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90
                   border rounded-full p-2 shadow backdrop-blur"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90
                   border rounded-full p-2 shadow backdrop-blur"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-2 w-2 rounded-full transition ${i === index ? 'bg-primary' : 'bg-primary/30'}`}
          />
        ))}
      </div>
    </div>
  )
}
