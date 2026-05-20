import { createFileRoute } from '@tanstack/react-router'
import { ContentRenderer } from '@/components/content-renderer'
import { NotFoundView } from '@/components/not-found-view'
import { PageHero } from '@/components/page-hero'
import { wpBySlugQuery } from '@/lib/wordpress'

export const Route = createFileRoute('/post/$slug')({
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(wpBySlugQuery('posts', params.slug)),
  component: PostRoute,
})

function PostRoute() {
  const post = Route.useLoaderData()

  if (!post) {
    return <NotFoundView />
  }

  return (
    <>
      <PageHero title={post.title} />
      <main className="container-narrow">
        <ContentRenderer item={post} />
      </main>
    </>
  )
}
