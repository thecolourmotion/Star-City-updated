export type Language = 'en' | 'fr'

export interface Translations {
  nav: {
    home: string
    games: string
    lounge: string
    pool: string
    reviews: string
    gameCity: string
  }
  hero: {
    welcome: string
    toStarCity: string
    starCity: string
    tagline: string
    description: string
    exploreActivities: string
    bookVisit: string
  }
  gallery: {
    title: string
    subtitle: string
  }
  services: {
    games: {
      title: string
      description: string
      features: string[]
    }
    lounge: {
      title: string
      description: string
      features: string[]
    }
    fastFood: {
      title: string
      description: string
      features: string[]
    }
  }
  about: {
    title: string
    description: string
    ctaButton: string
  }
  counters: {
    visitors: string
    games: string
    staff: string
  }
  pool: {
    title: string
    titleHighlight: string
    description: string
    features: string[]
  }
  reviews: {
    title: string
    subtitle: string
    basedOn: string
  }
  cta: {
    title: string
    titleHighlight: string
    description: string
    bookYourVisit: string
    contactUs: string
  }
  footer: {
    quickLinks: {
      title: string
      home: string
      lounge: string
      games: string
      fastFood: string
      pool: string
    }
    contact: {
      title: string
      phone: string
      email: string
      address: string
    }
    followUs: {
      title: string
    }
    copyright: string
  }
}
