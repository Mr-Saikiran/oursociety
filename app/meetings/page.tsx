import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { all } from '@/lib/repo'
import { MeetingsView } from './meetings-view'

export const metadata: Metadata = {
  title: 'Meetings',
  description: 'Held and upcoming meetings with minutes of meeting (MOM).',
}

export default async function MeetingsPage() {
  const meetings = await all('meetings')
  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader
        title="Meetings"
        description="Annual general body meetings, EC monthly meetings and special meetings. Open any held meeting to read the full minutes (MOM)."
      />
      <MeetingsView meetings={meetings} />
    </div>
  )
}
