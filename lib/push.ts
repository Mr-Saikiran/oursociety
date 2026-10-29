import webpush from 'web-push'
import { list, mutate } from './db'
import { collections, type PushSub } from './repo'

export type PushPayload = { title: string; body: string; url: string; tag?: string }

/** Public key the browser needs to subscribe. Empty when push is not configured. */
export const vapidPublicKey = () => process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? ''

const configured = () => {
  const pub = vapidPublicKey()
  const priv = process.env.VAPID_PRIVATE_KEY
  if (!pub || !priv) return false
  webpush.setVapidDetails(process.env.VAPID_SUBJECT || 'mailto:admin@example.com', pub, priv)
  return true
}

/** Sends one notification to every subscribed device and forgets the ones that have gone away. */
export async function pushToAll(payload: PushPayload) {
  if (!configured()) return
  const { name, seed } = collections.pushSubs
  const subs = await list<PushSub>(name, seed)
  if (!subs.length) return
  const body = JSON.stringify(payload)
  const gone = new Set<string>()
  await Promise.allSettled(
    subs.map((s) =>
      webpush.sendNotification(s, body, { TTL: 60 * 60 * 24 }).catch((e: { statusCode?: number }) => {
        if (e.statusCode === 404 || e.statusCode === 410) gone.add(s.endpoint)
      }),
    ),
  )
  if (gone.size) await mutate<PushSub>(name, seed, (items) => ({ items: items.filter((s) => !gone.has(s.endpoint)) }))
}
