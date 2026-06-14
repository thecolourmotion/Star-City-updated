"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Reveal } from "./reveal"

const features = ["Pool Parties", "Weekend Relaxation", "Family Activities"]

export function Pool() {
  return (
    <section id="pool" className="relative overflow-hidden py-12 md:py-16 lg:py-24">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-3xl border border-border">
          <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
            <Image
              src="/pool.png"
              alt="Swimming pool at Star City"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          {/* wave animation */}
          <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full overflow-hidden sm:h-24">
            <svg
              className="animate-wave h-full w-[200%]"
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                fill="oklch(0.87 0.18 99 / 0.25)"
                d="M0,64 C240,120 480,0 720,48 C960,96 1200,16 1440,64 L1440,120 L0,120 Z M1440,64 C1680,120 1920,0 2160,48 C2400,96 2640,16 2880,64 L2880,120 L1440,120 Z"
              />
            </svg>
          </div>

          <div className="absolute inset-0 flex items-end">
            <div className="p-4 sm:p-6 md:p-8 lg:p-12">
              <Reveal>
                <h2 className="heading-font text-2xl text-foreground sm:text-3xl md:text-4xl lg:text-6xl">
                  Swimming <span className="text-primary">Pool</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-3 max-w-xl text-pretty text-xs leading-relaxed text-foreground/85 sm:mt-4 sm:text-sm md:text-base">
                  Enjoy a refreshing swimming experience for families, friends, and events. Dive into
                  crystal-clear waters and unwind in style.
                </p>
              </Reveal>
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
                {features.map((f, i) => (
                  <motion.span
                    key={f}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-full border border-primary/40 bg-background/60 px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-foreground backdrop-blur"
                  >
                    {f}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
