"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Reveal } from "./reveal"

const photos = [
  { src: "/lounge.png", alt: "Lounge", tall: true },
  { src: "/arcade.png", alt: "Arcade games" },
  { src: "/pool-party.png", alt: "Pool party" },
  { src: "/fast-food.png", alt: "Fast food" },
  { src: "/basketball.png", alt: "Basketball arcade", tall: true },
  { src: "/pool.png", alt: "Swimming pool" },
]

export function Gallery() {
  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="site-container">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest sm:text-sm" style={{ color: "#d7cc32" }}>Gallery</p>
          <h2 className="heading-font mt-2 text-2xl text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            The Star City Experience
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:mt-12 grid-cols-1 sm:grid-cols-2 lg:columns-3 lg:[&>*]:mb-4">
          {photos.map((p, i) => (
            <motion.div
              key={p.src + i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border"
            >
              <div className={`relative w-full ${p.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image
                  src={p.src || "/placeholder.svg"}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
