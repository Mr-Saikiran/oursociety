'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bell, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems } from '@/lib/nav'
import { society } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => {
        const active = pathname === item.href
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
              active
                ? 'bg-sidebar-accent text-sidebar-primary'
                : 'text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground',
            )}
          >
            <Icon className="size-[18px] shrink-0" />
            <span className="truncate">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

function Brand({ compact }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-sidebar-accent">
        <Image src="/raowa-logo.png" alt="" width={34} height={34} className="size-8 object-contain" />
      </div>
      {!compact && (
        <div className="min-w-0 leading-tight">
          <p className="truncate font-serif text-base font-semibold text-sidebar-foreground">
            {society.shortName}
          </p>
          <p className="truncate text-xs text-sidebar-foreground/60">
            {society.acronym} · Reg {society.regNo}
          </p>
        </div>
      )}
    </div>
  )
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-background lg:grid lg:grid-cols-[17rem_1fr]">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-dvh flex-col gap-6 border-r border-sidebar-border bg-sidebar px-4 py-6 lg:flex">
        <Link href="/" className="px-2">
          <Brand />
        </Link>
        <ScrollArea className="-mx-1 flex-1 px-1">
          <NavLinks />
        </ScrollArea>
        <div className="rounded-xl bg-sidebar-accent/60 p-3 text-xs text-sidebar-foreground/70">
          <p className="font-medium text-sidebar-foreground">Community Hall</p>
          <p className="mt-1">{society.location}</p>
        </div>
      </aside>

      <div className="flex min-w-0 flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur-md lg:px-8">
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu />
                  </Button>
                }
              />
              <SheetContent side="left" className="w-72 border-sidebar-border bg-sidebar p-0">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex h-full flex-col gap-6 px-4 py-6">
                  <Brand />
                  <NavLinks />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex min-w-0 items-center gap-3 lg:hidden">
            <Brand compact />
            <span className="truncate font-serif text-base font-semibold">{society.shortName}</span>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell />
            </Button>
            <div className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              RA
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 px-4 pb-24 pt-6 lg:px-8 lg:pb-10">{children}</main>
      </div>

      {/* Mobile bottom navigation */}
      <MobileTabBar />
    </div>
  )
}

function MobileTabBar() {
  const pathname = usePathname()
  const primary = navItems.slice(0, 4)
  const rest = navItems.slice(4)
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
      {primary.map((item) => {
        const active = pathname === item.href
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors',
              active ? 'text-primary' : 'text-muted-foreground',
            )}
          >
            <Icon className="size-5" />
            {item.short}
          </Link>
        )
      })}
      <Sheet>
        <SheetTrigger
          render={
            <button
              className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium text-muted-foreground"
              aria-label="More sections"
            >
              <Menu className="size-5" />
              More
            </button>
          }
        />
        <SheetContent side="bottom" className="rounded-t-2xl">
          <SheetTitle className="mb-4 px-1 text-base">More sections</SheetTitle>
          <div className="grid grid-cols-3 gap-3 pb-4">
            {rest.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center text-xs font-medium"
                >
                  <Icon className="size-6 text-primary" />
                  {item.short}
                </Link>
              )
            })}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
