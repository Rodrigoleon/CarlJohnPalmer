import { createFileRoute } from '@tanstack/react-router'
import { ContentRenderer } from '@/components/content-renderer'
import { NotFoundView } from '@/components/not-found-view'
import { PageHero } from '@/components/page-hero'
import { wpBySlugQuery } from '@/lib/wordpress'

export const Route = createFileRoute('/show/$slug')({
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(wpBySlugQuery('show', params.slug)),
  component: ShowRoute,
})

function ShowRoute() {
  const show = Route.useLoaderData()

  if (!show) {
    return <NotFoundView />
  }

  return (
    <>
      <PageHero title={show.title} subtitle={show.excerpt} />
      <main className="container-narrow">
        <ContentRenderer item={show} />
      </main>
    </>
  )
}
