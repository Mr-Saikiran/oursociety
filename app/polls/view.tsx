'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { polls as seed, type Poll } from '@/lib/data-extra'

// Fixed "today" so poll open/closed state matches the seed data.
const TODAY = '2026-03-30'
const fmt = (d: string) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })

function PollCard({ poll }: { poll: Poll }) {
  const [options, setOptions] = useState(poll.options)
  const [voted, setVoted] = useState<string | null>(null)
  const [choice, setChoice] = useState<string | null>(null)
  const closed = poll.closes < TODAY
  const total = options.reduce((s, o) => s + o.votes, 0)
  const showResults = closed || voted !== null
  const leader = Math.max(...options.map((o) => o.votes))

  function vote() {
    if (!choice) return
    setOptions((p) => p.map((o) => (o.id === choice ? { ...o, votes: o.votes + 1 } : o)))
    setVoted(choice)
    toast.success('Your vote has been recorded')
  }

  return (
    <Card>
      <CardContent className="flex flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-medium leading-snug">{poll.question}</p>
            <p className="mt-1 text-sm text-muted-foreground">{poll.description}</p>
          </div>
          <Badge variant={closed ? 'outline' : 'default'} className="shrink-0">{closed ? 'Closed' : 'Open'}</Badge>
        </div>

        <div className="flex flex-col gap-2">
          {options.map((o) => {
            const pct = total ? Math.round((o.votes / total) * 100) : 0
            if (showResults) {
              return (
                <div key={o.id} className="flex flex-col gap-1">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1.5">
                      {o.label}
                      {voted === o.id && <CheckCircle2 className="size-3.5 text-primary" aria-label="Your vote" />}
                    </span>
                    <span className="text-muted-foreground">{pct}% · {o.votes}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className={`h-2 rounded-full ${o.votes === leader ? 'bg-primary' : 'bg-primary/40'}`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              )
            }
            return (
              <label
                key={o.id}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-sm transition-colors ${choice === o.id ? 'border-primary bg-primary/5' : 'hover:bg-muted/60'}`}
              >
                <input type="radio" name={poll.id} value={o.id} checked={choice === o.id} onChange={() => setChoice(o.id)} className="accent-[var(--primary)]" />
                {o.label}
              </label>
            )
          })}
        </div>

        <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>{total} votes · {closed ? 'closed' : 'closes'} {fmt(poll.closes)}</span>
          {!showResults && <Button size="sm" onClick={vote} disabled={!choice}>Submit vote</Button>}
        </div>
      </CardContent>
    </Card>
  )
}

export function PollsView() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {seed.map((p) => <PollCard key={p.id} poll={p} />)}
    </div>
  )
}
