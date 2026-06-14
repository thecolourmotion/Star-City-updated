"use client"

import { motion } from "framer-motion"
import { Star, StarHalf, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Reveal } from "./reveal"

const STAR_COLOR = "#d7cc32"

const reviews = [
  { name: "Aisha M.", text: "Best family day out we've had in ages. The arcade is huge and the food was delicious!", rating: 5 },
  { name: "James K.", text: "The private lounge is next level. Booked it for my birthday and everyone loved it.", rating: 4.5 },
  { name: "Lena P.", text: "Pool parties at Star City are unbeatable. Clean, fun, and the staff are amazing.", rating: 4 },
  { name: "Omar S.", text: "Racing simulators are so realistic. My kids didn't want to leave. We'll be back!", rating: 5 },
  { name: "Grace T.", text: "Great vibe, great prices, and something for every age. Highly recommend.", rating: 4.5 },
  { name: "David R.", text: "From games to food to relaxing in the lounge — it truly is the place to be.", rating: 4 },
]

function Stars({ rating, size = "h-4 w-4" }: { rating: number; size?: string }) {
  const full = Math.floor(rating)
  const hasHalf = rating % 1 !== 0
  return (
    <div className="flex gap-1" style={{ color: STAR_COLOR }} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f${i}`} className={size} style={{ fill: STAR_COLOR }} />
      ))}
      {hasHalf && <StarHalf className={size} style={{ fill: STAR_COLOR }} />}
    </div>
  )
}

function ReviewCard({ name, text, rating }: { name: string; text: string; rating: number }) {
  return (
    <div className="w-80 shrink-0 rounded-2xl border border-border bg-card p-6">
      <Stars rating={rating} />
      <p className="mt-4 text-sm leading-relaxed text-foreground/90">{text}</p>
      <p className="mt-4 text-sm font-semibold" style={{ color: "#d7cc32" }}>{name}</p>
    </div>
  )
}

export function Reviews() {
  const [mobileIndex, setMobileIndex] = useState(0)
  const loop = [...reviews, ...reviews]

  const handlePrev = () => {
    setMobileIndex((i) => (i - 1 + reviews.length) % reviews.length)
  }

  const handleNext = () => {
    setMobileIndex((i) => (i + 1) % reviews.length)
  }

  return (
    <section id="reviews" className="overflow-hidden py-16 md:py-24">
      <div className="site-container">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#d7cc32" }}>Reviews</p>
            <h2 className="heading-font mt-2 text-3xl text-foreground sm:text-5xl">
              Loved By Our Visitors
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3">
            <span className="heading-font text-3xl text-primary">4.9</span>
            <div className="text-left">
              <Stars rating={5} size="h-3.5 w-3.5" />
              <p className="text-xs text-muted-foreground">Based on 500+ happy visitors</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Desktop: Continuous scroll */}
      <div className="relative mt-12 hidden md:block">
        <motion.div
          className="flex gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </motion.div>
      </div>

      {/* Mobile: Centered review with bottom navigation */}
      <div className="relative mt-12 flex md:hidden flex-col items-center justify-center gap-6 px-4">
        <div className="w-full max-w-xs overflow-hidden">
          <motion.div
            initial={false}
            animate={{ x: -mobileIndex * 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex"
          >
            {reviews.map((r, i) => (
              <div key={i} className="w-full shrink-0">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <Stars rating={r.rating} />
                  <p className="mt-4 text-sm leading-relaxed text-foreground/90">{r.text}</p>
                  <p className="mt-4 text-sm font-semibold" style={{ color: "#d7cc32" }}>{r.name}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            disabled={mobileIndex === 0}
            className={`rounded-full border p-2 transition-all ${
              mobileIndex === 0
                ? "border-border/50 bg-card/50 opacity-50 cursor-not-allowed"
                : "border-border bg-card hover:bg-primary/10"
            }`}
            aria-label="Previous Review"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm text-muted-foreground">
            {mobileIndex + 1} / {reviews.length}
          </span>
          <button
            onClick={handleNext}
            disabled={mobileIndex === reviews.length - 1}
            className={`rounded-full border p-2 transition-all ${
              mobileIndex === reviews.length - 1
                ? "border-border/50 bg-card/50 opacity-50 cursor-not-allowed"
                : "border-border bg-card hover:bg-primary/10"
            }`}
            aria-label="Next Review"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
