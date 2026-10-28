import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PollsView } from './view'

export const metadata: Metadata = {
  title: 'Online Polls',
  description: 'Let every voice count. Vote once per poll and see live results.',
}

export default function Page() {
  return (
    <div>
      <PageHeader title="Online Polls" description="Let every voice count. Vote once per poll and see live results." />
      <PollsView />
    </div>
  )
}
