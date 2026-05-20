import type { CSSProperties } from 'react'
import homeHero from '@/assets/images/homehero.png'
import { Logo } from './logo'
import { SocialLinks } from './social-links'

export function HomeHero() {
  return (
    <section
      className="home-hero relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-40 text-white"
      style={{ '--home-hero-image': `url(${homeHero})` } as CSSProperties}
    >
      <div className="fog-layer fog-layer-one" />
      <div className="fog-layer fog-layer-two" />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <Logo className="mx-auto mb-6 size-44 md:hidden" />
        <h1 className="home-title m-0 font-display text-4xl font-bold uppercase tracking-[0.4rem] sm:text-5xl">
          Carl John Palmer
        </h1>
        <div className="mx-auto mt-5 h-px w-48 bg-white/25" />
      </div>
      <div className="absolute bottom-10 left-0 right-0 z-10 mx-auto w-full max-w-6xl px-4">
        <SocialLinks className="justify-center md:justify-start" />
      </div>
    </section>
  )
}
