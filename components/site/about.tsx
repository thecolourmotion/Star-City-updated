"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"

export function About() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      {/* subtle animated shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-3xl border-[3px] border-primary-foreground/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full border-[3px] border-primary-foreground/10"
      />

      <div className="site-container relative text-center">
        <Reveal>
          <h2 className="heading-font text-4xl text-primary-foreground sm:text-5xl md:text-6xl">
            Why People Love Star City
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Star City combines entertainment, food, relaxation, and family fun in one exciting
            destination. From adrenaline-pumping arcades to a refreshing pool and a premium private
            lounge, every visit becomes an unforgettable experience.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href="#cta"
            className="mt-10 inline-block rounded-full bg-background px-10 py-3.5 text-sm font-semibold text-foreground transition-all hover:scale-105"
          >
            Get In Touch
          </a>
        </Reveal>
      </div>
    </section>
  )
}
