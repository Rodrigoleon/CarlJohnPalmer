import { Link } from '@tanstack/react-router'
import type { WpContent } from '@/lib/wordpress'

type ShowCardProps = {
  show: WpContent
}

export function ShowCard({ show }: ShowCardProps) {
  return (
    <article className="show-card group relative min-h-[460px] overflow-hidden bg-black text-center text-[1.4rem] text-white">
      {show.featuredImage ? (
        <img
          src={show.featuredImage.src}
          alt={show.featuredImage.alt}
          className="absolute inset-0 size-full object-cover"
        />
      ) : null}
      <div className="absolute inset-0 z-[1] bg-black/30" />
      <header className="relative z-[1] flex min-h-[460px] items-center justify-center p-4">
        <h2 className="m-0 text-2xl font-bold leading-tight text-white">
          {show.title}
        </h2>
      </header>
      <Link
        to="/show/$slug"
        params={{ slug: show.slug }}
        aria-label={`View ${show.title}`}
        className="absolute inset-0 z-[2]"
      />
    </article>
  )
}
