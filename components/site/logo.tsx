import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Star%20City%20Logo-tnGlKLHsHNlwpTrjdiDyTp4prSLCjZ.png"
      alt="Star City Douala Bonamoussadi logo"
      width={150}
      height={104}
      priority
      className={`h-16 w-auto object-contain ${className}`}
    />
  )
}
