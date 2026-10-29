'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { toast } from 'sonner'
import {
  Bell, BellOff, BellRing, Megaphone, Wrench, CalendarClock, ShieldCheck, BookOpenCheck, Vote, Trees, ReceiptIndianRupee, Receipt,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { isUpcoming } from '@/lib/data'
import type { LiveData } from '@/lib/live'
import { subscribePush, unsubscribePush } from '@/app/actions/data'
import { society } from '@/society/config'

type Item = { id: string; date: string; title: string; body: string; href: string; icon: LucideIcon }

const STORAGE_KEY = 'oursociety:notifications-seen'

const moduleIcons: Record<string, LucideIcon> = {
  notices: Megaphone,
  requests: Wrench,
  meetings: CalendarClock,
  visitors: ShieldCheck,
  ledger: BookOpenCheck,
  polls: Vote,
  bookings: Trees,
  maintenance: ReceiptIndianRupee,
  bills: Receipt,
}

// Every change made in the app, plus notices, request updates and upcoming meetings
// that came with the seed data. An item the feed already announced is listed once.
const buildItems = ({ notices, requests, meetings, activity }: LiveData): Item[] => {
  const announced = new Set(activity.map((a) => a.ref).filter(Boolean))
  const base: Item[] = [
    ...notices.map((n) => ({ id: `n-${n.id}`, date: n.date, title: n.title, body: n.audienceLabel, href: '/notices', icon: Megaphone })),
    ...requests.map((r) => {
      const last = r.updates[r.updates.length - 1]
      return { id: `r-${r.id}-${last.on}`, date: last.on, title: `${r.ticketNo}: ${r.title}`, body: last.note, href: '/requests', icon: Wrench }
    }),
    ...meetings
      .filter(isUpcoming)
      .map((m) => ({ id: `m-${m.id}`, date: m.date, title: `Upcoming: ${m.title}`, body: `${m.time}, ${m.venue}`, href: '/meetings', icon: CalendarClock })),
  ]
  return [
    ...activity.map((a) => ({ id: `a-${a.id}`, date: a.at, title: a.title, body: a.body, href: a.href, icon: moduleIcons[a.module] ?? Bell })),
    ...base.filter((i) => !announced.has(i.id)),
  ].sort((a, b) => b.date.localeCompare(a.date))
}

const fmt = (d: string) => new Date(d).toLocaleDateString(society.locale, { day: 'numeric', month: 'short' })

function readSeen(): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]'))
  } catch {
    return new Set()
  }
}

/* ---------------------------- Phone alerts ---------------------------- */

type PushState = 'loading' | 'unconfigured' | 'unsupported' | 'ios-install' | 'denied' | 'off' | 'on'

const VAPID_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? ''

function keyBytes(base64: string) {
  const pad = '='.repeat((4 - (base64.length % 4)) % 4)
  const raw = atob((base64 + pad).replace(/-/g, '+').replace(/_/g, '/'))
  return Uint8Array.from(raw, (c) => c.charCodeAt(0))
}

function usePushAlerts() {
  const [state, setState] = useState<PushState>('loading')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (!VAPID_KEY) return setState('unconfigured')
    const supported = 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window
    if (!supported) {
      // iPhones only allow web push once the app is added to the Home Screen.
      return setState(/iPhone|iPad|iPod/.test(navigator.userAgent) ? 'ios-install' : 'unsupported')
    }
    if (Notification.permission === 'denied') return setState('denied')
    navigator.serviceWorker
      .getRegistration('/sw.js')
      .then((reg) => reg?.pushManager.getSubscription())
      .then((sub) => setState(sub ? 'on' : 'off'))
      .catch(() => setState('off'))
  }, [])

  async function enable() {
    setBusy(true)
    try {
      const reg = await navigator.serviceWorker.register('/sw.js')
      const permission = await Notification.requestPermission()
      if (permission !== 'granted') {
        setState(permission === 'denied' ? 'denied' : 'off')
        return
      }
      const sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: keyBytes(VAPID_KEY) })
      const json = sub.toJSON() as { endpoint: string; keys: { p256dh: string; auth: string } }
      const res = await subscribePush(json)
      if (res.error) throw new Error(res.error)
      setState('on')
      toast.success(res.ok)
    } catch (e) {
      toast.error((e as Error).message || 'Could not turn on alerts.')
    } finally {
      setBusy(false)
    }
  }

  async function disable() {
    setBusy(true)
    try {
      const reg = await navigator.serviceWorker.getRegistration('/sw.js')
      const sub = await reg?.pushManager.getSubscription()
      if (sub) {
        await unsubscribePush(sub.endpoint)
        await sub.unsubscribe()
      }
      setState('off')
      toast.success('Alerts are off for this device')
    } finally {
      setBusy(false)
    }
  }

  return { state, busy, enable, disable }
}

function PushAlerts() {
  const { state, busy, enable, disable } = usePushAlerts()
  if (state === 'loading' || state === 'unconfigured') return null
  const hint: Partial<Record<PushState, string>> = {
    unsupported: 'This browser cannot show phone alerts.',
    'ios-install': 'On iPhone, tap Share, then Add to Home Screen, and open the app from there to turn on alerts.',
    denied: 'Alerts are blocked. Allow notifications for this site in your phone settings.',
  }
  return (
    <div className="mx-3 mt-3 flex items-center gap-3 rounded-2xl bg-tone-sun px-4 py-3 text-tone-sun-ink">
      {state === 'on' ? <BellRing className="size-5 shrink-0" aria-hidden /> : <BellOff className="size-5 shrink-0" aria-hidden />}
      <p className="min-w-0 flex-1 text-sm font-semibold">
        {hint[state] ?? (state === 'on' ? 'Alerts are on for this device.' : 'Get an alert on this phone for every update.')}
      </p>
      {(state === 'off' || state === 'on') && (
        <Button size="sm" variant={state === 'on' ? 'outline' : 'default'} disabled={busy} onClick={state === 'on' ? disable : enable}>
          {state === 'on' ? 'Turn off' : 'Turn on'}
        </Button>
      )}
    </div>
  )
}

/* ------------------------------- Bell -------------------------------- */

export function Notifications({ live }: { live: LiveData }) {
  const items = useMemo(() => buildItems(live), [live])
  const [open, setOpen] = useState(false)
  const [seen, setSeen] = useState<Set<string> | null>(null)
  useEffect(() => setSeen(readSeen()), [])

  const unread = useMemo(() => (seen ? items.filter((i) => !seen.has(i.id)).length : 0), [seen, items])

  function markAllRead() {
    const all = new Set(items.map((i) => i.id))
    setSeen(all)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...all]))
    } catch {}
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" aria-label={unread ? `Notifications, ${unread} unread` : 'Notifications'} className="relative">
            <Bell />
            {unread > 0 && (
              <span className="absolute top-1 right-1 flex min-w-4 items-center justify-center rounded-full bg-accent px-1 text-xs leading-4 font-bold text-accent-foreground ring-2 ring-background">
                {unread > 9 ? '9+' : unread}
              </span>
            )}
          </Button>
        }
      />
      <SheetContent side="right" className="w-full gap-0 p-0 sm:max-w-sm">
        <div className="flex items-center justify-between border-b px-5 py-4 pr-12">
          <SheetTitle className="text-lg font-extrabold">Notifications</SheetTitle>
          {unread > 0 && (
            <Button variant="link" size="sm" className="h-auto p-0" onClick={markAllRead}>
              Mark all read
            </Button>
          )}
        </div>
        <PushAlerts />
        <ul className="flex-1 overflow-y-auto p-2">
          {items.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted-foreground">Nothing new yet.</li>}
          {items.map((i) => {
            const isUnread = seen ? !seen.has(i.id) : false
            const Icon = i.icon
            return (
              <li key={i.id}>
                <Link
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="flex gap-3 rounded-2xl px-3 py-3 transition-colors duration-120 ease-out hover:bg-muted focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
                >
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-tone-mint text-tone-mint-ink">
                    <Icon className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={cn('text-sm leading-snug', isUnread ? 'font-bold' : 'font-medium text-foreground/80')}>{i.title}</p>
                    <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{i.body}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1.5">
                    <span className="text-xs text-muted-foreground">{fmt(i.date)}</span>
                    {isUnread && <span className="size-2 rounded-full bg-accent" aria-label="Unread" />}
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </SheetContent>
    </Sheet>
  )
}
