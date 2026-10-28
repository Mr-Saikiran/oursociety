import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { BillsView } from './view'

export const metadata: Metadata = {
  title: 'Maintenance Bills',
  description: 'Generate bills for any billing frequency and send them to members by SMS or email.',
}

export default function Page() {
  return (
    <div>
      <PageHeader title="Maintenance Bills" description="Generate bills for any billing frequency and send them to members by SMS or email." />
      <BillsView />
    </div>
  )
}
