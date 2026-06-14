"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"

export function About() {
  return (
    <section className="relative overflow-hidden bg-primary py-12 md:py-16 lg:py-28">
      {/* subtle animated shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-3xl border-[3px] border-primary-foreground/10 sm:-left-24 sm:-top-24 sm:h-72 sm:w-72"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full border-[3px] border-primary-foreground/10 sm:-bottom-28 sm:-right-20 sm:h-80 sm:w-80"
      />

      <div className="site-container relative text-center">
        <Reveal>
          <h2 className="heading-font text-2xl text-primary-foreground sm:text-3xl md:text-4xl lg:text-6xl">
            Why People Love Star City
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-xs leading-relaxed text-primary-foreground/85 sm:text-sm md:mt-6 lg:text-lg">
            Star City combines entertainment, food, relaxation, and family fun in one exciting
            destination. From adrenaline-pumping arcades to a refreshing pool and a premium private
            lounge, every visit becomes an unforgettable experience.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href="#cta"
            className="mt-6 sm:mt-8 lg:mt-10 inline-block rounded-full bg-background px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-3.5 text-xs sm:text-sm lg:text-base font-semibold text-foreground transition-all hover:scale-105"
          >
            Get In Touch
          </a>
        </Reveal>
      </div>
    </section>
  )
}
