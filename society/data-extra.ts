// Seed data for accounting, visitors, notices, documents, contacts and polls.
import type { Contact, LedgerEntry, Notice, Poll, SocietyDocument, Visitor } from '@/lib/types'

/* ---------------------------- Accounting ---------------------------- */

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

export const visitors: Visitor[] = [
  { id: 'v1', name: 'Ramesh Kumar', phone: '+91 98480 11122', purpose: 'Guest', visiting: 'Plot 255, 4B', resident: 'M Venkat Rao', expectedAt: '2026-03-30 18:30', status: 'pending' },
  { id: 'v2', name: 'Amazon Delivery', phone: '+91 90000 22334', purpose: 'Delivery', visiting: 'Plot 304, 5A', resident: 'Kusam Ramesh Reddy', expectedAt: '2026-03-30 17:10', status: 'inside' },
  { id: 'v3', name: 'Suresh (Plumber)', phone: '+91 99890 33445', purpose: 'Service', visiting: 'Plot 113, 2C', resident: 'Jayanthi Venkata Satish', expectedAt: '2026-03-30 11:00', status: 'exited' },
  { id: 'v4', name: 'Ola Cab TS09 AB 1234', phone: '+91 91000 44556', purpose: 'Cab', visiting: 'Plot 69, 2D', resident: 'Tondepu Naresh', expectedAt: '2026-03-30 09:15', status: 'exited' },
  { id: 'v5', name: 'Venkatesh Contractors', phone: '+91 98660 55667', purpose: 'Contractor', visiting: 'Plot 12, 1E', resident: 'Resident', expectedAt: '2026-03-31 10:00', status: 'approved' },
  { id: 'v6', name: 'Unknown salesperson', phone: '+91 70000 66778', purpose: 'Guest', visiting: 'Plot 24, 5E', resident: 'Sreenivas Sunkara', expectedAt: '2026-03-30 12:40', status: 'denied' },
]

/* ----------------------------- Notices ------------------------------ */

export const notices: Notice[] = [
  { id: 'n7', title: 'Invitation to join the Working Committee', body: 'This is an invitation to join the Working Committees (WC) and serve our society. Choose any of these responsibilities:\n1. Security: taking attendance, allocation of positions and monitoring\n2. Drainage and sweeping: coordinate with members and the CMC team in resolving issues\n3. Street lights: coordinate with members and the CMC team in resolving issues\n4. Manjeera water: monitor water release timings and maintenance (repair and flow)\n5. CH maintenance: hall, gym, office room, library and indoor games room\n6. Plantation and parks maintenance: parks (1C, 3A, 4E, 5C), inside CH, vertical roads and East Gate\n7. Maintenance collections: follow up with members on clearing pending dues\n8. Cultural team: monitor and organize all cultural events\n\nEligibility to join:\n1. Zero dues\n2. Give your opinion or approval on posts in the WC group within 24 hours\n3. Acknowledge grievances and queries raised by members in the main group\n4. Be able to coordinate with the Core Committee and CMC teams in resolving issues\n5. Attend CC and WC meetings whenever required for society causes\n\nAfter joining, failing any of these criteria leads to automatic disqualification. The Core Committee will guide and support WC members in their responsibilities. For any queries, reach out to General Secretary Mahesh Masade (98665 73646).', date: '2026-10-29', audience: 'all', audienceLabel: 'All members', category: 'General', attachments: [] },
  { id: 'n6', title: 'Advance annual maintenance: save 20%', body: 'Monthly maintenance is ₹1,000 (₹12,000 a year). Pay the whole year in advance for just ₹9,600: that is ₹800 a month, and you save ₹2,400.\n\nHow to pay: make a one-time payment of ₹9,600 using the NBH app.\nAfter payment: share the receipt in the group with your name, plot number and road number for recordkeeping.\n\nLast date for advance payment: 31 July 2025. All payments must be made through the NBH app or the society bank account.', date: '2025-07-01', audience: 'all', audienceLabel: 'All members', category: 'Maintenance', attachments: [] },
  { id: 'n1', title: 'Water tanker timing change', body: 'From 1 April, tanker supply on Roads 3A–3C will run 6–8 AM instead of 7–9 AM.', date: '2026-03-29', audience: 'unit', audienceLabel: 'Roads 3A, 3B, 3C', category: 'Maintenance', attachments: [] },
  { id: 'n2', title: 'Notice: AGM 2026 on 14 June', body: 'The Annual General Meeting will be held at the community hall. Agenda and audited statements are attached.', date: '2026-03-27', audience: 'all', audienceLabel: 'All members', category: 'General', attachments: ['AGM_2026_Agenda.pdf', 'Audit_Report_FY25-26.pdf'] },
  { id: 'n3', title: 'Advance maintenance 2026–27 open', body: 'Pay ₹9,600 per plot via UPI or bank transfer before 30 April. Receipts will be issued within 3 working days.', date: '2026-03-18', audience: 'all', audienceLabel: 'All members', category: 'Maintenance', attachments: ['Payment_Instructions.pdf'] },
  { id: 'n4', title: 'Vehicle entry — new gate pass', body: 'All resident vehicles must display the new RFID sticker from 1 May. Collect from the security office.', date: '2026-03-12', audience: 'all', audienceLabel: 'All members', category: 'Security', attachments: [] },
  { id: 'n5', title: 'Power shutdown — Road 4B', body: 'Planned shutdown 10 AM – 1 PM on 2 April for transformer maintenance.', date: '2026-03-10', audience: 'unit', audienceLabel: 'Road 4B', category: 'Urgent', attachments: [] },
]

/* ---------------------------- Documents ----------------------------- */

export const documents: SocietyDocument[] = [
  { id: 'd1', name: "Reddy's Avenue Byelaws 2026 (chapter-wise, final, 8 Aug 2026)", category: 'Byelaws', date: '2026-08-08', size: '51 KB', type: 'DOCX', url: '/documents/Reddys_Avenue_Final_Chapter_Wise_Byelaws_2026_08Aug26.docx' },
  { id: 'd2', name: 'Minutes of AGM — 15 June 2025', category: 'Minutes', date: '2025-06-15', size: '310 KB', type: 'PDF' },
  { id: 'd3', name: 'Monthly Balance Sheet, March 2026', category: 'Financial', date: '2026-03-31', size: '538 KB', type: 'PDF', url: '/documents/balance-sheet-2026-03.pdf' },
  { id: 'd11', name: 'Monthly Balance Sheet, February 2026', category: 'Financial', date: '2026-02-28', size: '504 KB', type: 'PDF', url: '/documents/balance-sheet-2026-02.pdf' },
  { id: 'd12', name: 'Monthly Balance Sheet, January 2026', category: 'Financial', date: '2026-01-31', size: '509 KB', type: 'PDF', url: '/documents/balance-sheet-2026-01.pdf' },
  { id: 'd4', name: 'Sri Rama Navami 2026, Balance Sheet', category: 'Financial', date: '2026-04-13', size: '37 KB', type: 'PDF', url: '/documents/balance-sheet-ramanavami-2026.pdf' },
  { id: 'd13', name: 'New Year, Bhogi and Republic Day 2026, Balance Sheet', category: 'Financial', date: '2026-02-28', size: '80 KB', type: 'PDF', url: '/documents/balance-sheet-newyear-bhogi-2026.pdf' },
  { id: 'd5', name: 'Vinayaka Chavithi 2025 — Donors List', category: 'Financial', date: '2025-09-23', size: '190 KB', type: 'PDF' },
  { id: 'd6', name: 'Advance Maintenance List 2025', category: 'Financial', date: '2025-06-01', size: '240 KB', type: 'PDF' },
  { id: 'd7', name: 'Telangana Societies Registration Act 2001 (Act 35)', category: 'Legal', date: '2001-01-01', size: '1.2 MB', type: 'PDF' },
  { id: 'd8', name: 'Society registration certificate (1374/2014)', category: 'Certificates', date: '2014-06-10', size: '520 KB', type: 'PDF' },
  { id: 'd9', name: 'Rental tenant registration form', category: 'Forms', date: '2025-11-01', size: '90 KB', type: 'DOCX' },
  { id: 'd10', name: 'CCTV footage request form', category: 'Forms', date: '2025-11-01', size: '70 KB', type: 'DOCX' },
]

/* ----------------------------- Contacts ----------------------------- */

export const contacts: Contact[] = [
  { id: 'cc1', name: 'Veera Reddy', role: 'President', phone: '+91 94948 00090', group: 'Committee' },
  { id: 'cc2', name: 'Mahesh Masade', role: 'General Secretary', phone: '+91 98665 73646', group: 'Committee' },
  { id: 'cc3', name: 'N Jaya Prakash Reddy', role: 'Treasurer', phone: '+91 90009 02210', group: 'Committee' },
  { id: 'cc4', name: 'G Srilatha', role: 'Vice President', phone: '+91 99490 49126', group: 'Committee' },
  { id: 'cc5', name: 'Nirmala Yenugu', role: 'Vice President', phone: '+91 79892 41052', group: 'Committee' },
  { id: 'cc6', name: 'Malisetti Balanagaraju', role: 'Joint Secretary', phone: '+91 98850 06938', group: 'Committee' },
  { id: 'cc7', name: 'KVV Satyanarayana', role: 'Joint Secretary', phone: '+91 99894 96743', group: 'Committee' },
  { id: 'cc8', name: 'K Kiran Kumar', role: 'Joint Treasurer', phone: '+91 98808 20040', group: 'Committee' },
  { id: 'cc9', name: 'Vikas Reddy P', role: 'Joint Treasurer', phone: '+91 72076 67847', group: 'Committee' },
  { id: 'cc10', name: 'Naveen Viswanatham', role: 'Working Committee', phone: '+91 90003 11096', group: 'Committee' },
  { id: 'cc11', name: 'Padma', role: 'Working Committee', phone: '+91 98661 41166', group: 'Committee' },
  { id: 'cc12', name: 'Election Reddy', role: 'Working Committee', phone: '+91 95055 04999', group: 'Committee' },
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
