import type { LucideIcon } from 'lucide-react'
import {
  LayoutDashboard,
  ReceiptIndianRupee,
  Landmark,
  Users,
  CalendarClock,
  Map,
  Trees,
  Home,
  Wrench,
  Receipt,
  BookOpenCheck,
  ShieldCheck,
  Megaphone,
  FolderOpen,
  BookUser,
  Vote,
} from 'lucide-react'

export type NavItem = {
  href: string
  label: string
  short: string
  icon: LucideIcon
  description: string
}

export const navItems: NavItem[] = [
  { href: '/', label: 'Dashboard', short: 'Home', icon: LayoutDashboard, description: 'Overview & announcements' },
  { href: '/maintenance', label: 'Maintenance', short: 'Dues', icon: ReceiptIndianRupee, description: 'Paid members & dues' },
  { href: '/finances', label: 'Finances & Audit', short: 'Finances', icon: Landmark, description: 'Balance sheets & audit reports' },
  { href: '/committee', label: 'Committee', short: 'Committee', icon: Users, description: 'Executive & Advisory' },
  { href: '/meetings', label: 'Meetings', short: 'Meetings', icon: CalendarClock, description: 'Held & upcoming, minutes' },
  { href: '/layout-plan', label: 'Layout Plan', short: 'Map', icon: Map, description: 'Society map & plots' },
  { href: '/amenities', label: 'Amenities', short: 'Amenities', icon: Trees, description: 'Facilities & booking' },
  { href: '/rentals', label: 'Rentals', short: 'Rentals', icon: Home, description: 'Properties for rent' },
  { href: '/requests', label: 'Member Support', short: 'Support', icon: Wrench, description: 'Requests, complaints & feedback' },
  { href: '/bills', label: 'Maintenance Bills', short: 'Bills', icon: Receipt, description: 'Generate & send bills' },
  { href: '/accounting', label: 'Accounting', short: 'Accounts', icon: BookOpenCheck, description: 'Income, expenses & ledger' },
  { href: '/visitors', label: 'Visitor Management', short: 'Visitors', icon: ShieldCheck, description: 'Gate log & approvals' },
  { href: '/notices', label: 'Notices', short: 'Notices', icon: Megaphone, description: 'Notices & announcements' },
  { href: '/documents', label: 'Document Library', short: 'Documents', icon: FolderOpen, description: 'Byelaws, minutes & forms' },
  { href: '/contacts', label: 'Handy Contacts', short: 'Contacts', icon: BookUser, description: 'Call society contacts' },
  { href: '/polls', label: 'Online Polls', short: 'Polls', icon: Vote, description: 'Vote & see results' },
]
