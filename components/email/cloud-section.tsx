import React from "react"
import Image from "next/image"

interface CloudSectionProps {
  icon: React.ReactNode
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  ctaLabel: string
  ctaHref: string
  reversed?: boolean
  badge?: string
}

export function CloudSection({
  icon,
  title,
  description,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref,
  reversed = false,
  badge,
}: CloudSectionProps) {
  return (
    <section className="px-6 py-8 md:px-12">
      <div
        className={`mx-auto flex max-w-2xl flex-col items-center gap-6 md:flex-row ${
          reversed ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-xl md:w-1/2">
          {badge && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              {badge}
            </span>
          )}
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            width={480}
            height={320}
            className="h-52 w-full object-cover md:h-60"
          />
        </div>

        {/* Content */}
        <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
          <h2 className="mb-2 text-xl font-bold text-primary md:text-2xl">
            {title}
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
          <a
            href={ctaHref}
            className="inline-block rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-secondary-foreground transition-all hover:brightness-110 hover:shadow-md"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
