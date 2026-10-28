import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { AccountingView } from './view'

export const metadata: Metadata = {
  title: 'Accounting',
  description: 'Society income, expenses and ledger, from billing to year-end statements.',
}

export default function Page() {
  return (
    <div>
      <PageHeader title="Accounting" description="Society income, expenses and ledger, from billing to year-end statements." />
      <AccountingView />
    </div>
  )
}
