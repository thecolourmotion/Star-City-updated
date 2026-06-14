import { Phone, Mail, MapPin } from "lucide-react"
import { Logo } from "./logo"

const socials = ["Facebook", "Instagram", "TikTok", "WhatsApp"]

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Lounge", href: "#lounge" },
  { label: "Games", href: "#games" },
  { label: "Fast Food", href: "#fast-food" },
  { label: "Pool", href: "#pool" },
]

export function Footer() {
  return (
    <footer className="border-t border-border" style={{ backgroundColor: "#000000" }}>
      <div className="site-container grid gap-6 sm:gap-8 py-10 md:py-12 lg:py-14 md:grid-cols-4">
        <div className="col-span-1 md:col-span-1">
          <Logo />
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Star City is your all-in-one entertainment destination — games, food, lounge, and pool
            for the whole family.
          </p>
        </div>

        <div>
          <h3 className="heading-font text-sm sm:text-base md:text-lg" style={{ color: "#d7cc32" }}>Quick Links</h3>
          <ul className="mt-3 sm:mt-4 space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="heading-font text-sm sm:text-base md:text-lg" style={{ color: "#d7cc32" }}>Contact</h3>
          <ul className="mt-3 sm:mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: "#d7cc32" }} /> +(237)6531226550
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: "#d7cc32" }} /> hello@starcity.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: "#d7cc32" }} /> Bonamoussadi, Douala
            </li>
          </ul>
        </div>

        <div>
          <h3 className="heading-font text-sm sm:text-base md:text-lg" style={{ color: "#d7cc32" }}>Follow Us</h3>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="flex h-9 sm:h-10 items-center justify-center rounded-full border border-border px-3 sm:px-4 text-xs font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border py-4 md:py-6">
        <p className="site-container text-center text-xs text-muted-foreground">
          © 2026 Star City. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
