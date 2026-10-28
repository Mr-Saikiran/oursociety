import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { NoticesView } from './view'

export const metadata: Metadata = {
  title: 'Notices & Announcements',
  description: 'Public or lane-specific notices with attachments, emailed to applicable members.',
}

export default function Page() {
  return (
    <div>
      <PageHeader title="Notices & Announcements" description="Public or lane-specific notices with attachments, emailed to applicable members." />
      <NoticesView />
    </div>
  )
}
