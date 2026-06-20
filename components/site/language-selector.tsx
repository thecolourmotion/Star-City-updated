'use client'

import { useLanguage } from '@/lib/i18n/context'
import { Language } from '@/lib/i18n/types'

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: 'en', flag: '🇬🇧', label: 'English' },
    { code: 'fr', flag: '🇫🇷', label: 'Français' },
  ]

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            language === lang.code
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-foreground/70 hover:text-foreground hover:bg-secondary/80'
          }`}
          aria-label={`Switch to ${lang.label}`}
          title={lang.label}
        >
          <span className="text-base">{lang.flag}</span>
          <span className="hidden sm:inline">{lang.code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  )
}
