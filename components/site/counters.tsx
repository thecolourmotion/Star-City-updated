"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 10, suffix: "+", label: "Games Available" },
  { value: 50, suffix: "K+", label: "Happy Visitors" },
  { value: 300, suffix: "+", label: "Events Hosted" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start: number | null = null
    const duration = 1600
    const step = (t: number) => {
      if (start === null) start = t
      const progress = Math.min((t - start) / duration, 1)
      setDisplay(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value])

  return (
    <span ref={ref} className="heading-font text-5xl sm:text-6xl" style={{ color: "#000000" }}>
      {display}
      {suffix}
    </span>
  )
}

export function Counters() {
  return (
    <section className="border-y border-border py-16" style={{ backgroundColor: "#d7cc32" }}>
      <div className="site-container grid gap-10 text-center sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-sm font-medium uppercase tracking-wider" style={{ color: "#000000" }}>
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
