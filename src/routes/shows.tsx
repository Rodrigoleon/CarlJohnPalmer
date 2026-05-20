import { createFileRoute } from '@tanstack/react-router'
import { PageHero } from '@/components/page-hero'
import { ShowCard } from '@/components/show-card'
import { wpCollectionQuery } from '@/lib/wordpress'

export const Route = createFileRoute('/shows')({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(wpCollectionQuery('show')),
  component: ShowsRoute,
})

function ShowsRoute() {
  const shows = Route.useLoaderData()

  return (
    <>
      <PageHero title="Shows" />
      <main className="under-slant relative grid bg-[#e8e8e8] md:grid-cols-3">
        {shows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </main>
    </>
  )
}
