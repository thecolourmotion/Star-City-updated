"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { WHATSAPP_LINK } from "./contact"
import { useLanguage } from "@/lib/i18n/context"

const slides = [
  { src: "/arcade.png", alt: "Arcade racing games at Star City" },
  { src: "/lounge.png", alt: "Private lounge at Star City" },
  { src: "/pool.png", alt: "Swimming pool at Star City" },
  { src: "/fast-food.png", alt: "Fast food area at Star City" },
]

export function Hero() {
  const [index, setIndex] = useState(0)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 120])
  const { t } = useLanguage()

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 2250)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-40 md:pt-32 md:pb-44">
      <div className="site-container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="heading-font text-5xl leading-[0.95] text-foreground sm:text-7xl md:text-8xl" style={{ fontWeight: 600 }}>
            {t("hero.welcome")}
            <br />
            {t("hero.toStarCity")} <span style={{ color: "#d7cc32" }}>{t("hero.starCity")}</span>
          </h1>
          <p className="heading-font mt-4 text-lg tracking-widest sm:text-xl" style={{ color: "#d7cc32" }}>
            {t("hero.tagline")}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t("hero.description")}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#games"
              style={{ backgroundColor: "#d7cc32", color: "#000000" }}
              className="w-full rounded-full px-8 py-3.5 text-sm font-semibold transition-all hover:scale-105 sm:w-auto"
            >
              {t("hero.exploreActivities")}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderColor: "#d7cc32", color: "#d7cc32", backgroundColor: "#000000" }}
              className="w-full rounded-full border px-8 py-3.5 text-sm font-semibold transition-all hover:bg-[#d7cc32] hover:text-black sm:w-auto"
            >
              {t("hero.bookVisit")}
            </a>
          </div>
        </motion.div>

        {/* image slider */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl border border-border md:rounded-3xl w-full lg:w-[80%] lg:ml-[10%] lg:mr-[10%]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={slides[index].src || "/placeholder.svg"}
                alt={slides[index].alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary" : "w-2.5 bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
