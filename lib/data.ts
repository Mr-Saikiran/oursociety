// Single import point for society config, seed data, record types and formatters.
import { society } from '@/society/config'

export * from '@/society/config'
export * from '@/society/data'
export type * from './types'

/** Money in the society's currency, no decimals. */
export const money = (n: number) =>
  n.toLocaleString(society.locale, { style: 'currency', currency: society.currency, maximumFractionDigits: 0 })

/** Short money for large totals: ₹3.51 L, ₹1.20 Cr in India; compact notation elsewhere. */
export const moneyShort = (n: number) => {
  if (society.currency === 'INR') {
    if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr'
    if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L'
    return money(n)
  }
  return n.toLocaleString(society.locale, { style: 'currency', currency: society.currency, notation: 'compact', maximumFractionDigits: 1 })
}

/** Dates in the society's locale. */
export const formatDate = (d: string | Date, opts: Intl.DateTimeFormatOptions) =>
  new Date(d).toLocaleDateString(society.locale, opts)

/** Today's date (YYYY-MM-DD) in the society's time zone. */
export const todayISO = () => new Intl.DateTimeFormat('en-CA', { timeZone: society.timeZone }).format(new Date())

/** A meeting is upcoming until its date has passed, whatever its stored status says. */
export const isUpcoming = (m: { date: string }) => m.date.slice(0, 10) >= todayISO()
