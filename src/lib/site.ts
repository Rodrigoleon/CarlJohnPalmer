export const siteConfig = {
  title: 'Carl John Palmer',
  description:
    'YouTube and podcast host of shows like Cults, Coffee, and Conversation, The Great Inquisition, and more.',
  author: '@carljpalmer',
  wordpressUrl:
    import.meta.env.VITE_WORDPRESS_API_URL?.replace(/\/$/, '') ??
    'https://cheatcodes.io/cjp',
}

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shows', to: '/shows' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export const socialLinks = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCDN8zTiWlenn3jaXilEuEnQ',
  },
  {
    label: 'Anchor',
    href: 'https://anchor.fm/cultscoffeeconvo',
  },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/show/4TED6Sd2hKXQGF5Xy3CWbk',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cultscoffeeconvo/?hl=en',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/cultscoffeeconversation/',
  },
] as const
