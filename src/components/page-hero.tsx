type PageHeroProps = {
  title: string
  subtitle?: string
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="inner-hero relative flex min-h-[400px] items-center justify-center px-4 py-24 text-center text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="m-0 font-display text-4xl font-black uppercase tracking-[0.28em] sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <>
            <div className="mx-auto my-5 h-px w-40 bg-white/25" />
            <p className="mx-auto max-w-3xl text-lg text-white/80">{subtitle}</p>
          </>
        ) : null}
      </div>
    </section>
  )
}
