"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { WHATSAPP_LINK } from "./contact"
import { LanguageSelector } from "./language-selector"
import { useLanguage } from "@/lib/i18n/context"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const links = [
    { labelKey: "nav.home", href: "#home" },
    { labelKey: "nav.games", href: "#games" },
    { labelKey: "nav.lounge", href: "#lounge" },
    { labelKey: "nav.pool", href: "#pool" },
    { labelKey: "nav.reviews", href: "#reviews" },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="site-container flex items-center justify-between py-4">
        <Link href="#home" aria-label="Star City home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 transition-all hover:text-primary hover:[text-shadow:0_0_12px_oklch(0.87_0.18_99_/_0.6)]"
              >
                {t(l.labelKey)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSelector />
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="game-city-btn rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white"
          >
            {t("nav.gameCity")}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <ul className="site-container flex flex-col gap-1 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {t(l.labelKey)}
                  </a>
                </li>
              ))}
              <li className="pt-2 flex items-center justify-between">
                <LanguageSelector />
              </li>
              <li className="pt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="game-city-btn block rounded-full px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white"
                >
                  {t("nav.gameCity")}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
