import { queryOptions } from '@tanstack/react-query'
import { decodeHtml } from './html'
import { siteConfig } from './site'

type WpRendered = {
  rendered: string
}

type WpMediaSize = {
  source_url?: string
}

type WpMedia = {
  id: number
  source_url: string
  alt_text?: string
  media_details?: {
    sizes?: Record<string, WpMediaSize>
  }
}

type WpItem = {
  id: number
  slug: string
  type: 'page' | 'post' | 'show'
  link: string
  title: WpRendered
  content: WpRendered
  excerpt?: WpRendered
  date?: string
  featured_media?: number
}

export type ContentType = 'pages' | 'posts' | 'show'

export type WpContent = {
  id: number
  slug: string
  type: WpItem['type']
  link: string
  title: string
  htmlTitle: string
  content: string
  excerpt: string
  date?: string
  featuredMediaId?: number
  featuredImage?: {
    src: string
    alt: string
  }
}

function endpoint(path: string, params: Record<string, string | number> = {}) {
  const url = new URL(`${siteConfig.wordpressUrl}/wp-json/wp/v2/${path}`)

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, String(value))
  }

  return url
}

async function fetchJson<T>(url: URL): Promise<T> {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`WordPress request failed: ${response.status} ${url.href}`)
  }

  return response.json() as Promise<T>
}

function normalizeContent(item: WpItem): WpContent {
  return {
    id: item.id,
    slug: item.slug,
    type: item.type,
    link: item.link,
    htmlTitle: item.title.rendered,
    title: decodeHtml(item.title.rendered),
    content: item.content.rendered,
    excerpt: decodeHtml(item.excerpt?.rendered),
    date: item.date,
    featuredMediaId: item.featured_media || undefined,
  }
}

function pickMediaUrl(media: WpMedia) {
  return (
    media.media_details?.sizes?.['post-thumbnail']?.source_url ??
    media.media_details?.sizes?.large?.source_url ??
    media.media_details?.sizes?.medium_large?.source_url ??
    media.source_url
  )
}

async function fetchMedia(id: number) {
  return fetchJson<WpMedia>(
    endpoint(`media/${id}`, {
      _fields: 'id,source_url,alt_text,media_details',
    })
  )
}

async function attachFeaturedImages(items: WpContent[]) {
  return Promise.all(
    items.map(async (item) => {
      if (!item.featuredMediaId) {
        return item
      }

      const media = await fetchMedia(item.featuredMediaId)

      return {
        ...item,
        featuredImage: {
          src: pickMediaUrl(media),
          alt: media.alt_text || item.title,
        },
      }
    })
  )
}

export async function fetchCollection(type: ContentType) {
  const items = await fetchJson<WpItem[]>(
    endpoint(type, {
      per_page: 100,
      _fields:
        'id,slug,type,link,title,content,excerpt,date,featured_media',
    })
  )

  return attachFeaturedImages(items.map(normalizeContent))
}

export async function fetchBySlug(type: ContentType, slug: string) {
  const items = await fetchJson<WpItem[]>(
    endpoint(type, {
      slug,
      per_page: 1,
      _fields:
        'id,slug,type,link,title,content,excerpt,date,featured_media',
    })
  )

  const [item] = await attachFeaturedImages(items.map(normalizeContent))

  return item ?? null
}

export const wpCollectionQuery = (type: ContentType) =>
  queryOptions({
    queryKey: ['wp', type],
    queryFn: () => fetchCollection(type),
    staleTime: 1000 * 60 * 5,
  })

export const wpBySlugQuery = (type: ContentType, slug: string) =>
  queryOptions({
    queryKey: ['wp', type, slug],
    queryFn: () => fetchBySlug(type, slug),
    staleTime: 1000 * 60 * 5,
  })
