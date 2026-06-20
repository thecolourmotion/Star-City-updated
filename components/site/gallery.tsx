"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { useLanguage } from "@/lib/i18n/context"

const photos = [
  { src: "/lounge.png", alt: "Lounge", tall: true },
  { src: "/arcade.png", alt: "Arcade games" },
  { src: "/pool-party.png", alt: "Pool party" },
  { src: "/fast-food.png", alt: "Fast food" },
  { src: "/basketball.png", alt: "Basketball arcade", tall: true },
  { src: "/pool.png", alt: "Swimming pool" },
]

export function Gallery() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="site-container">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#d7cc32" }}>{t("gallery.title")}</p>
          <h2 className="heading-font mt-2 text-3xl text-foreground sm:text-5xl">
            {t("gallery.subtitle")}
          </h2>
        </Reveal>

        <div className="mt-12 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {photos.map((p, i) => (
            <motion.div
              key={p.src + i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border"
            >
              <Image
                src={p.src || "/placeholder.svg"}
                alt={p.alt}
                width={600}
                height={p.tall ? 800 : 450}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
