"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

type ServiceProps = {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  features?: string[]
  reverse?: boolean
}

export function ServiceSection({
  id,
  title,
  description,
  image,
  imageAlt,
  features,
  reverse = false,
}: ServiceProps) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="site-container">
        <div
          className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: reverse ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border"
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="pointer-events-none absolute -bottom-2 -right-2 h-full w-full rounded-2xl border-2 border-primary/0 transition-all duration-500 group-hover:border-primary/60" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reverse ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl" style={{ color: "#d7cc32" }}>{title}</h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
            {features && (
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/90">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "#d7cc32" }}>
                      <Check className="h-3 w-3 text-black" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
