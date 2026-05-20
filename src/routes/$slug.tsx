import { createFileRoute } from '@tanstack/react-router'
import { ContentRenderer } from '@/components/content-renderer'
import { NotFoundView } from '@/components/not-found-view'
import { PageHero } from '@/components/page-hero'
import { wpBySlugQuery } from '@/lib/wordpress'

export const Route = createFileRoute('/$slug')({
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(wpBySlugQuery('pages', params.slug)),
  component: PageRoute,
})

function PageRoute() {
  const page = Route.useLoaderData()

  if (!page) {
    return <NotFoundView />
  }

  return (
    <>
      <PageHero title={page.title} />
      <main className="container-narrow">
        <ContentRenderer item={page} />
      </main>
    </>
  )
}
