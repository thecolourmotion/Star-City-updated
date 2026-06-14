"use client"

import { motion } from "framer-motion"
import { WHATSAPP_LINK } from "./contact"

export function CTA() {
  return (
    <section id="cta" className="py-12 md:py-16 lg:py-24">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-primary/40 bg-card px-4 py-10 sm:px-6 md:px-8 md:py-16 lg:py-20 text-center"
        >
          <div className="relative">
            <h2 className="heading-font text-2xl text-foreground sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontWeight: 600 }}>
              Ready For An <span style={{ color: "#d7cc32" }}>Amazing Experience?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-xs text-muted-foreground sm:mt-4 sm:text-sm md:text-base">
              Book your visit today and discover everything Star City has to offer for the whole family.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full px-6 py-2.5 text-xs font-semibold transition-all hover:scale-105 sm:w-auto sm:px-8 sm:py-3.5 sm:text-sm"
                style={{ backgroundColor: "#d7cc32", color: "#000000" }}
              >
                Book Your Visit
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border px-6 py-2.5 text-xs font-semibold transition-all sm:w-auto sm:px-8 sm:py-3.5 sm:text-sm"
                style={{ borderColor: "#d7cc32", color: "#d7cc32" }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
