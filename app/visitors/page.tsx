import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { VisitorsView } from './view'

export const metadata: Metadata = {
  title: 'Visitor Management',
  description: 'Verify every visitor with residents before they enter the premises.',
}

export default function Page() {
  return (
    <div>
      <PageHeader title="Visitor Management" description="Verify every visitor with residents before they enter the premises." />
      <VisitorsView />
    </div>
  )
}
