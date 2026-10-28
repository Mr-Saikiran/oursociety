import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { all } from '@/lib/repo'
import { MaintenanceView } from './maintenance-view'

export const metadata: Metadata = {
  title: 'Maintenance — Reddy\'s Avenue',
  description: 'Paid members list and outstanding dues at ₹9,600 per plot per year.',
}

export default async function MaintenancePage() {
  const records = await all('maintenance')
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        title="Maintenance & Dues"
        description="Annual maintenance is ₹9,600 per plot, approved at AGM 2025. Track paid members and outstanding dues across all lanes."
      />
      <MaintenanceView records={records} />
    </div>
  )
}
