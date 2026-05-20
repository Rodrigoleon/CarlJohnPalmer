import type { WpContent } from '@/lib/wordpress'

type ContentRendererProps = {
  item: WpContent
}

export function ContentRenderer({ item }: ContentRendererProps) {
  return (
    <article
      className={`system-output page-slug-${item.slug} page-id-${item.id}`}
      dangerouslySetInnerHTML={{ __html: item.content }}
    />
  )
}
