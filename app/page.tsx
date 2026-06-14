import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { About } from "@/components/site/about"
import { ServiceSection } from "@/components/site/service-section"
import { Counters } from "@/components/site/counters"
import { Pool } from "@/components/site/pool"
import { Gallery } from "@/components/site/gallery"
import { Reviews } from "@/components/site/reviews"
import { CTA } from "@/components/site/cta"
import { Footer } from "@/components/site/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />

      <ServiceSection
        id="fast-food"
        title="Fast Food"
        image="/fast-food.png"
        imageAlt="Fast food at Star City"
        description="Refuel between games with delicious meals, crispy snacks, refreshing drinks, and family-friendly dining. From juicy burgers to loaded fries and creamy milkshakes, our kitchen serves up flavor the whole family will love."
        features={["Burgers & Fries", "Milkshakes", "Family Combos", "Quick Service"]}
      />

      <ServiceSection
        id="games"
        title="Games (Kids & Adults)"
        image="/arcade.png"
        imageAlt="Arcade games at Star City"
        description="Step into a world of non-stop fun with the latest arcade machines, hoops, racing simulators, and family entertainment. Whether you're chasing high scores or competing with friends, there's a game for every player."
        features={["Arcade Machines", "Basketball Games", "Racing Simulators", "Family Fun"]}
        reverse
      />

      <Counters />

      <ServiceSection
        id="lounge"
        title="Private Lounge"
        image="/lounge.png"
        imageAlt="Private lounge at Star City"
        description="Unwind in our premium private lounge designed for comfort and exclusivity. Perfect for celebrations, gatherings, and VIP experiences, it's the ideal spot to relax between the action."
        features={["Comfortable Seating", "VIP Experience", "Relaxation Area", "Events & Gatherings"]}
      />

      <Pool />
      <Gallery />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  )
}
