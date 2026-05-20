import { createFileRoute } from '@tanstack/react-router'
import { HomeHero } from '@/components/home-hero'

export const Route = createFileRoute('/')({
  component: IndexRoute,
})

function IndexRoute() {
  return <HomeHero />
}
