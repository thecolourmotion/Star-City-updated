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
      <div className="site-container grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Star City is your all-in-one entertainment destination — games, food, lounge, and pool
            for the whole family.
          </p>
        </div>

        <div>
          <h3 className="heading-font text-lg" style={{ color: "#d7cc32" }}>Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="heading-font text-lg" style={{ color: "#d7cc32" }}>Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4" style={{ color: "#d7cc32" }} /> +(237)6531226550
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4" style={{ color: "#d7cc32" }} /> hello@starcity.com
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4" style={{ color: "#d7cc32" }} /> Bonamoussadi, Douala
            </li>
          </ul>
        </div>

        <div>
          <h3 className="heading-font text-lg" style={{ color: "#d7cc32" }}>Follow Us</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="flex h-10 items-center justify-center rounded-full border border-border px-4 text-xs font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="site-container text-center text-xs text-muted-foreground">
          © 2026 Star City. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
