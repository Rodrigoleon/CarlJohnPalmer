import { Link } from '@tanstack/react-router'
import { PageHero } from './page-hero'
import { Button } from '@/components/ui/button'

export function NotFoundView() {
  return (
    <>
      <PageHero title="Not Found" />
      <main className="container-narrow py-16 text-center">
        <p className="mx-auto max-w-xl text-lg">
          That page is not available, but the shows and schedule are still here.
        </p>
        <Button render={<Link to="/" />} className="mt-6">
          Return Home
        </Button>
      </main>
    </>
  )
}
