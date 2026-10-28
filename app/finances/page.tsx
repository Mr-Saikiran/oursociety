import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { FinancesView } from './finances-view'

export const metadata: Metadata = {
  title: 'Finances & Audit — Reddy\'s Avenue',
  description: 'Balance sheets, audit reports, festival and temple trust accounts.',
}

export default function FinancesPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        title="Finances & Audit"
        description="Audited annual accounts, monthly balance sheets, and transparent festival and temple trust statements. All figures in Indian Rupees."
      />
      <FinancesView />
    </div>
  )
}
