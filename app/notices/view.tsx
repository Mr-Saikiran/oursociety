'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Paperclip, Plus, Users, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { notices as seed, type Notice } from '@/lib/data-extra'

const fmt = (d: string) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
const categories: Notice['category'][] = ['General', 'Maintenance', 'Event', 'Security', 'Urgent']

function NewNotice({ onAdd }: { onAdd: (n: Notice) => void }) {
  const [open, setOpen] = useState(false)
  const [audience, setAudience] = useState<Notice['audience']>('all')
  const [category, setCategory] = useState<Notice['category']>('General')

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const files = (f.getAll('files') as File[]).filter((x) => x.size > 0).map((x) => x.name)
    const roads = String(f.get('roads') ?? '').trim()
    onAdd({
      id: `n-${Date.now()}`,
      title: String(f.get('title')).trim(),
      body: String(f.get('body')).trim(),
      date: new Date().toISOString().slice(0, 10),
      audience,
      audienceLabel: audience === 'all' ? 'All members' : `Road ${roads}`,
      category,
      attachments: files,
    })
    toast.success(`Notice published and emailed to ${audience === 'all' ? 'all members' : `Road ${roads} members`}`)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button />}>
        <Plus data-icon="inline-start" />
        New notice
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create a notice</DialogTitle>
          <DialogDescription>Applicable members are emailed when you publish.</DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5"><Label htmlFor="title">Title</Label><Input id="title" name="title" required /></div>
          <div className="flex flex-col gap-1.5"><Label htmlFor="body">Message</Label><Textarea id="body" name="body" rows={4} required /></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label>Audience</Label>
              <Select items={[{ value: 'all', label: 'All members' }, { value: 'unit', label: 'Specific roads' }]} value={audience} onValueChange={(v) => setAudience(v as Notice['audience'])}>
                <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All members</SelectItem>
                  <SelectItem value="unit">Specific roads</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Category</Label>
              <Select value={category} onValueChange={(v) => setCategory(v as Notice['category'])}>
                <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                <SelectContent>{categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
              </Select>
            </div>
          </div>
          {audience === 'unit' && (
            <div className="flex flex-col gap-1.5"><Label htmlFor="roads">Roads</Label><Input id="roads" name="roads" required placeholder="e.g. 4B, 4C" /></div>
          )}
          <div className="flex flex-col gap-1.5"><Label htmlFor="files">Attachments</Label><Input id="files" name="files" type="file" multiple /></div>
          <DialogFooter><Button type="submit">Publish</Button></DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export function NoticesView() {
  const [items, setItems] = useState<Notice[]>(seed)

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-end"><NewNotice onAdd={(n) => setItems((p) => [n, ...p])} /></div>
      <div className="flex flex-col gap-3">
        {items.map((n) => (
          <Card key={n.id}>
            <CardContent className="flex flex-col gap-2 p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={n.category === 'Urgent' ? 'destructive' : 'secondary'}>{n.category}</Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  {n.audience === 'all' ? <Users className="size-3.5" aria-hidden /> : <MapPin className="size-3.5" aria-hidden />}
                  {n.audienceLabel}
                </span>
                <span className="text-xs text-muted-foreground">· {fmt(n.date)}</span>
              </div>
              <p className="font-medium">{n.title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{n.body}</p>
              {n.attachments.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {n.attachments.map((a) => (
                    <span key={a} className="flex items-center gap-1.5 rounded-md bg-muted px-2 py-1 text-xs">
                      <Paperclip className="size-3" aria-hidden />{a}
                    </span>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
