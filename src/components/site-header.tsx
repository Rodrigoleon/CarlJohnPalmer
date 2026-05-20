import { Link } from '@tanstack/react-router'
import { MenuIcon } from 'lucide-react'
import { Logo } from './logo'
import { navItems } from '@/lib/site'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav
      className={
        mobile
          ? 'flex flex-col items-center gap-8 text-xl'
          : 'hidden items-center justify-end gap-8 md:flex'
      }
      aria-label="Primary navigation"
    >
      {navItems.map((item) => (
        item.to === '/' || item.to === '/shows' ? (
          <Link
            key={item.label}
            to={item.to}
            className="font-semibold no-underline transition"
            activeProps={{ className: 'is-active' }}
          >
            {item.label}
          </Link>
        ) : (
          <Link
            key={item.label}
            to="/$slug"
            params={{ slug: item.to.slice(1) }}
            className="font-semibold no-underline transition"
            activeProps={{ className: 'is-active' }}
          >
            {item.label}
          </Link>
        )
      ))}
    </nav>
  )
}

export function SiteHeader() {
  return (
    <header className="site-header pointer-events-none absolute left-0 right-0 top-10 z-30 px-4">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 items-center">
        <Link
          to="/"
          aria-label="Carl John Palmer home"
          className="site-logo pointer-events-auto inline-flex w-fit text-white"
        >
          <Logo className="size-12" />
        </Link>
        <div className="pointer-events-auto flex justify-end">
          <NavLinks />
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="text-white hover:bg-white/10 hover:text-white md:hidden"
                />
              }
            >
              <MenuIcon />
              <span className="sr-only">Open navigation</span>
            </SheetTrigger>
            <SheetContent className="bg-gradient-to-r from-[#4f197f] to-[#19647f] text-white">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex min-h-full items-center justify-center">
                <NavLinks mobile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
