// Mock data for the additional modules: accounting, visitors, notices,
// documents, contacts and polls. Replace with database queries later.

/* ---------------------------- Accounting ---------------------------- */

export type LedgerEntry = {
  id: string
  date: string
  type: 'income' | 'expense'
  category: string
  description: string
  amount: number
  mode: 'UPI' | 'Bank transfer' | 'Cash' | 'Cheque'
}

export const ledger: LedgerEntry[] = [
  { id: 'l1', date: '2026-03-28', type: 'income', category: 'Maintenance', description: 'Advance maintenance 2026–27 (batch 14)', amount: 182400, mode: 'UPI' },
  { id: 'l2', date: '2026-03-27', type: 'expense', category: 'Security', description: 'Security agency — March invoice', amount: 148000, mode: 'Bank transfer' },
  { id: 'l3', date: '2026-03-25', type: 'expense', category: 'Housekeeping', description: 'Garbage collection & sweeping — March', amount: 96000, mode: 'Bank transfer' },
  { id: 'l4', date: '2026-03-22', type: 'expense', category: 'Electricity', description: 'Common area street lights — TSSPDCL', amount: 41250, mode: 'Bank transfer' },
  { id: 'l5', date: '2026-03-20', type: 'income', category: 'Maintenance', description: 'Advance maintenance 2026–27 (batch 13)', amount: 134400, mode: 'UPI' },
  { id: 'l6', date: '2026-03-18', type: 'expense', category: 'Repairs', description: 'Street light replacement — Road 5A', amount: 8600, mode: 'Cash' },
  { id: 'l7', date: '2026-03-15', type: 'income', category: 'Rent of common area', description: 'Community hall booking', amount: 12000, mode: 'UPI' },
  { id: 'l8', date: '2026-03-12', type: 'expense', category: 'Water', description: 'Tanker & Manjeera water charges', amount: 52800, mode: 'Bank transfer' },
  { id: 'l9', date: '2026-03-10', type: 'expense', category: 'Office', description: 'Stationery, printing, bank charges', amount: 6400, mode: 'Cash' },
  { id: 'l10', date: '2026-03-05', type: 'income', category: 'Maintenance', description: 'Pending dues recovered — lane drive', amount: 76800, mode: 'Cheque' },
  { id: 'l11', date: '2026-03-02', type: 'expense', category: 'Garden', description: 'Landscaping & plantation upkeep', amount: 24500, mode: 'Bank transfer' },
]

/* ----------------------------- Visitors ----------------------------- */

export type Visitor = {
  id: string
  name: string
  phone: string
  purpose: 'Guest' | 'Delivery' | 'Service' | 'Cab' | 'Contractor'
  visiting: string // plot + road
  resident: string
  expectedAt: string
  status: 'pending' | 'approved' | 'inside' | 'exited' | 'denied'
}

export const visitors: Visitor[] = [
  { id: 'v1', name: 'Ramesh Kumar', phone: '+91 98480 11122', purpose: 'Guest', visiting: 'Plot 255, 4B', resident: 'M Venkat Rao', expectedAt: '2026-03-30 18:30', status: 'pending' },
  { id: 'v2', name: 'Amazon Delivery', phone: '+91 90000 22334', purpose: 'Delivery', visiting: 'Plot 304, 5A', resident: 'Kusam Ramesh Reddy', expectedAt: '2026-03-30 17:10', status: 'inside' },
  { id: 'v3', name: 'Suresh (Plumber)', phone: '+91 99890 33445', purpose: 'Service', visiting: 'Plot 113, 2C', resident: 'Jayanthi Venkata Satish', expectedAt: '2026-03-30 11:00', status: 'exited' },
  { id: 'v4', name: 'Ola Cab TS09 AB 1234', phone: '+91 91000 44556', purpose: 'Cab', visiting: 'Plot 69, 2D', resident: 'Tondepu Naresh', expectedAt: '2026-03-30 09:15', status: 'exited' },
  { id: 'v5', name: 'Venkatesh Contractors', phone: '+91 98660 55667', purpose: 'Contractor', visiting: 'Plot 12, 1E', resident: 'Resident', expectedAt: '2026-03-31 10:00', status: 'approved' },
  { id: 'v6', name: 'Unknown salesperson', phone: '+91 70000 66778', purpose: 'Guest', visiting: 'Plot 24, 5E', resident: 'Sreenivas Sunkara', expectedAt: '2026-03-30 12:40', status: 'denied' },
]

/* ----------------------------- Notices ------------------------------ */

export type Notice = {
  id: string
  title: string
  body: string
  date: string
  audience: 'all' | 'unit'
  audienceLabel: string
  category: 'General' | 'Maintenance' | 'Event' | 'Security' | 'Urgent'
  attachments: string[]
}

export const notices: Notice[] = [
  { id: 'n1', title: 'Water tanker timing change', body: 'From 1 April, tanker supply on Roads 3A–3C will run 6–8 AM instead of 7–9 AM.', date: '2026-03-29', audience: 'unit', audienceLabel: 'Roads 3A, 3B, 3C', category: 'Maintenance', attachments: [] },
  { id: 'n2', title: 'Notice: AGM 2026 on 14 June', body: 'The Annual General Meeting will be held at the community hall. Agenda and audited statements are attached.', date: '2026-03-27', audience: 'all', audienceLabel: 'All members', category: 'General', attachments: ['AGM_2026_Agenda.pdf', 'Audit_Report_FY25-26.pdf'] },
  { id: 'n3', title: 'Advance maintenance 2026–27 open', body: 'Pay ₹9,600 per plot via UPI or bank transfer before 30 April. Receipts will be issued within 3 working days.', date: '2026-03-18', audience: 'all', audienceLabel: 'All members', category: 'Maintenance', attachments: ['Payment_Instructions.pdf'] },
  { id: 'n4', title: 'Vehicle entry — new gate pass', body: 'All resident vehicles must display the new RFID sticker from 1 May. Collect from the security office.', date: '2026-03-12', audience: 'all', audienceLabel: 'All members', category: 'Security', attachments: [] },
  { id: 'n5', title: 'Power shutdown — Road 4B', body: 'Planned shutdown 10 AM – 1 PM on 2 April for transformer maintenance.', date: '2026-03-10', audience: 'unit', audienceLabel: 'Road 4B', category: 'Urgent', attachments: [] },
]

/* ---------------------------- Documents ----------------------------- */

export type SocietyDocument = {
  id: string
  name: string
  category: 'Byelaws' | 'Minutes' | 'Financial' | 'Legal' | 'Forms' | 'Certificates'
  date: string
  size: string
  type: 'PDF' | 'DOCX' | 'XLSX'
}

export const documents: SocietyDocument[] = [
  { id: 'd1', name: "Reddy's Avenue Byelaws 2026 (chapter-wise)", category: 'Byelaws', date: '2026-01-15', size: '420 KB', type: 'DOCX' },
  { id: 'd2', name: 'Minutes of AGM — 15 June 2025', category: 'Minutes', date: '2025-06-15', size: '310 KB', type: 'PDF' },
  { id: 'd3', name: 'Balance Sheet — March 2026', category: 'Financial', date: '2026-03-31', size: '280 KB', type: 'PDF' },
  { id: 'd4', name: 'Sri Rama Navami 2026 — Balance Sheet', category: 'Financial', date: '2026-04-05', size: '150 KB', type: 'PDF' },
  { id: 'd5', name: 'Vinayaka Chavithi 2025 — Donors List', category: 'Financial', date: '2025-09-23', size: '190 KB', type: 'PDF' },
  { id: 'd6', name: 'Advance Maintenance List 2025', category: 'Financial', date: '2025-06-01', size: '240 KB', type: 'PDF' },
  { id: 'd7', name: 'Telangana Societies Registration Act 2001 (Act 35)', category: 'Legal', date: '2001-01-01', size: '1.2 MB', type: 'PDF' },
  { id: 'd8', name: 'Society registration certificate (1374/2014)', category: 'Certificates', date: '2014-06-10', size: '520 KB', type: 'PDF' },
  { id: 'd9', name: 'Rental tenant registration form', category: 'Forms', date: '2025-11-01', size: '90 KB', type: 'DOCX' },
  { id: 'd10', name: 'CCTV footage request form', category: 'Forms', date: '2025-11-01', size: '70 KB', type: 'DOCX' },
]

/* ----------------------------- Contacts ----------------------------- */

export type Contact = {
  id: string
  name: string
  role: string
  phone: string
  group: 'Committee' | 'Staff' | 'Emergency' | 'Vendors' | 'Authorities'
}

export const contacts: Contact[] = [
  { id: 'c1', name: 'Chukka Satyanarayana', role: 'President', phone: '+91 98480 00001', group: 'Committee' },
  { id: 'c2', name: 'Mahesh Masade', role: 'General Secretary', phone: '+91 98480 00002', group: 'Committee' },
  { id: 'c3', name: 'Sitharamachandra Rao', role: 'Treasurer', phone: '+91 98480 00003', group: 'Committee' },
  { id: 'c4', name: 'Main gate security desk', role: 'Security (24×7)', phone: '+91 40 4000 1001', group: 'Staff' },
  { id: 'c5', name: 'Society office', role: 'Office / Billing', phone: '+91 40 4000 1002', group: 'Staff' },
  { id: 'c6', name: 'Society electrician', role: 'Electrical', phone: '+91 99890 12345', group: 'Staff' },
  { id: 'c7', name: 'Police', role: 'Emergency', phone: '100', group: 'Emergency' },
  { id: 'c8', name: 'Ambulance', role: 'Emergency', phone: '108', group: 'Emergency' },
  { id: 'c9', name: 'Fire', role: 'Emergency', phone: '101', group: 'Emergency' },
  { id: 'c10', name: 'Water tanker supplier', role: 'Water', phone: '+91 90000 77889', group: 'Vendors' },
  { id: 'c11', name: 'Housekeeping supervisor', role: 'Sanitation', phone: '+91 91000 88990', group: 'Vendors' },
  { id: 'c12', name: 'TSSPDCL helpline', role: 'Electricity', phone: '1912', group: 'Authorities' },
  { id: 'c13', name: 'GHMC / NMC control room', role: 'Municipal', phone: '040 2111 1111', group: 'Authorities' },
]

/* ------------------------------ Polls ------------------------------- */

export type Poll = {
  id: string
  question: string
  description: string
  closes: string
  options: { id: string; label: string; votes: number }[]
}

export const polls: Poll[] = [
  {
    id: 'p1', question: 'Where should the box cricket court come up?', description: 'Proposed in AGM 2025. Pick the preferred location.', closes: '2026-12-15',
    options: [{ id: 'a', label: 'Road 5C open plot', votes: 142 }, { id: 'b', label: 'Near community hall', votes: 88 }, { id: 'c', label: 'Not needed', votes: 31 }],
  },
  {
    id: 'p2', question: 'Increase annual maintenance to ₹10,800 from 2027–28?', description: 'To cover rising security and water costs.', closes: '2026-12-31',
    options: [{ id: 'a', label: 'Yes', votes: 120 }, { id: 'b', label: 'No', votes: 97 }, { id: 'c', label: 'Phased increase', votes: 64 }],
  },
  {
    id: 'p3', question: 'Preferred day for monthly clean-up drive', description: 'Closed — result applies from November.', closes: '2026-10-10',
    options: [{ id: 'a', label: 'First Saturday', votes: 174 }, { id: 'b', label: 'Last Sunday', votes: 119 }],
  },
]
