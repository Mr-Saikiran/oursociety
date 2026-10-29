// Seed data for the Reddy's Avenue Owners Welfare Association (RAOWA).
// Derived from association documents (AGM 2025 minutes, March 2026 balance sheet,
// advance maintenance list, festival balance sheets). All figures are in INR.
// Collections the app can edit (requests, maintenance, notices…) start from this
// data and are then stored in the database; the rest is shown as written here.
import { society } from './config'
import type {
  Amenity, CommitteeMember, FinancialStatement, MaintenanceRecord, Meeting, Rental, ServiceRequest,
} from '@/lib/types'

/* ------------------------------------------------------------------ */
/* Committees                                                          */
/* ------------------------------------------------------------------ */

// Core Committee, from the association's committee contacts list.
export const executiveCommittee: CommitteeMember[] = [
  { id: 'cc-1', name: 'Veera Reddy', role: 'President', phone: '+91 94948 00090', responsibilities: ['Manjeera water', 'Street lights', 'Festivals, organizing'] },
  { id: 'cc-2', name: 'Mahesh Masade', role: 'General Secretary', phone: '+91 98665 73646', responsibilities: ['Drainage and sweeping', 'Festivals, organizing', 'Festivals, cultural'] },
  { id: 'cc-3', name: 'N Jaya Prakash Reddy', role: 'Treasurer', phone: '+91 90009 02210', responsibilities: ['Membership and balance sheets', 'General maintenance, parks'] },
  { id: 'cc-4', name: 'G Srilatha', role: 'Vice President', phone: '+91 99490 49126', responsibilities: ['CH bookings', 'General maintenance, CH', 'General maintenance, roads', 'Festivals, cultural'] },
  { id: 'cc-5', name: 'Nirmala Yenugu', role: 'Vice President', phone: '+91 79892 41052', responsibilities: ['Security (secondary)', 'Festivals, cultural'] },
  { id: 'cc-6', name: 'Malisetti Balanagaraju', role: 'Joint Secretary', phone: '+91 98850 06938', responsibilities: ['CCTV footage', 'Manjeera water (secondary)', 'Festivals, cultural'] },
  { id: 'cc-7', name: 'KVV Satyanarayana', role: 'Joint Secretary', phone: '+91 99894 96743', responsibilities: ['Security', 'Festivals, organizing'] },
  { id: 'cc-8', name: 'K Kiran Kumar', role: 'Joint Treasurer', phone: '+91 98808 20040', responsibilities: ['No Broker Hood (NBH)', 'CCTV footage (secondary)'] },
  { id: 'cc-9', name: 'Vikas Reddy P', role: 'Joint Treasurer', phone: '+91 72076 67847', responsibilities: ['Membership and balance sheets (secondary)', 'NBH (secondary)', 'Festivals, cultural'] },
]

export const workingCommittee: CommitteeMember[] = [
  { id: 'wc-1', name: 'Naveen Viswanatham', role: 'Working Committee', phone: '+91 90003 11096', responsibilities: ['Festivals, organizing', 'Festivals, cultural'] },
  { id: 'wc-2', name: 'Padma', role: 'Working Committee', phone: '+91 98661 41166', responsibilities: ['Drainage and sweeping (secondary)', 'Festivals, cultural'] },
  { id: 'wc-3', name: 'Election Reddy', role: 'Working Committee', phone: '+91 95055 04999', responsibilities: ['General maintenance, CH and parks (secondary)', 'Festivals, organizing'] },
]

/** Working Committee points of contact, by department. */
export const pointsOfContact: { department: string; primary: string; secondary?: string }[] = [
  { department: 'Membership and balance sheets', primary: 'N Jaya Prakash Reddy', secondary: 'P Vikas Reddy' },
  { department: 'No Broker Hood (NBH)', primary: 'Kiran Kumar', secondary: 'P Vikas Reddy' },
  { department: 'Security', primary: 'KVV Satyanarayana', secondary: 'Nirmala Yenugu' },
  { department: 'Manjeera', primary: 'Veera Reddy', secondary: 'Balanagaraju' },
  { department: 'CCTV footage', primary: 'Malisetti Balanagaraju', secondary: 'Kiran Kumar' },
  { department: 'Drainage and sweeping', primary: 'Mahesh Masade', secondary: 'Padma' },
  { department: 'Street lights', primary: 'Veera Reddy' },
  { department: 'CH bookings', primary: 'G Srilatha' },
  { department: 'General maintenance, CH', primary: 'G Srilatha', secondary: 'Election Reddy' },
  { department: 'General maintenance, parks', primary: 'N Jaya Prakash Reddy', secondary: 'Election Reddy' },
  { department: 'General maintenance, roads', primary: 'G Srilatha' },
  { department: 'Festivals, organizing', primary: 'Veera Reddy, Mahesh Masade, KVV Satyanarayana, Naveen, Election Reddy' },
  { department: 'Festivals, cultural', primary: 'Mahesh Masade, Balanagaraju, P Vikas Reddy, Nirmala Yenugu, G Srilatha, Padma and Naveen' },
]

/** Who residents should reach out to with any query. */
export const queriesContact = 'Veera Reddy and Mahesh Masade'

export const advisoryCommittee: CommitteeMember[] = [
  {
    id: 'ac-1',
    name: 'Miryala Srinivas Rao',
    role: 'Advisor — Temple Trust',
    road: '2A',
    since: '2014',
    responsibilities: ['Temple construction guidance', 'Major donations'],
  },
  {
    id: 'ac-2',
    name: 'Krishnamurthy',
    road: '5B',
    role: 'Advisor — Infrastructure',
    since: '2016',
    responsibilities: ['Civil works review', '5B/5C play area'],
  },
  {
    id: 'ac-3',
    name: 'V S Ramalingam',
    role: 'Advisor — Legal & Byelaws',
    road: '4C',
    since: '2015',
    responsibilities: ['Byelaws', 'Registration compliance', 'Dispute resolution'],
  },
  {
    id: 'ac-4',
    name: 'Veera Reddy',
    role: 'Advisor — Community Relations',
    road: '5B',
    since: '2017',
    responsibilities: ['Resident liaison', 'Maintenance drives'],
  },
]

/* ------------------------------------------------------------------ */
/* Meetings & Minutes                                                  */
/* ------------------------------------------------------------------ */

export const meetings: Meeting[] = [
  {
    id: 'm-agm-2025',
    title: 'Annual General Body Meeting 2025',
    type: 'AGM',
    date: '2025-06-15',
    time: '5:00 PM',
    venue: 'Community Hall (CH)',
    status: 'held',
    agenda: [
      '5B–5C play area development',
      'Sri Naga Venkateswara Swamy Temple construction',
      'Festivals celebrated 2024–25',
      'Maintenance drives & advance collection',
      'Society & Temple Byelaws',
    ],
    minutes: {
      attendees: 140,
      summary:
        'President Chukka Satyanarayana welcomed members and reviewed development works completed since the new EC formed in July 2024 — CC road laying across lanes, drainage manhole caps from NMC, CCTV coverage, a new transformer for voltage stability, and monsoon tree trimming. General Secretary Mahesh Masade presented the year ahead.',
      decisions: [
        {
          topic: 'Financial relationships between committee members',
          initiator: 'M Gurunath',
          detail:
            'After voting, members agreed NOT to add any byelaw clause restricting financial relationships among Society or Temple committee members, as it is impractical to establish.',
        },
        {
          topic: 'RAOWA–Temple Trust agreement',
          initiator: 'M Gurunath',
          detail:
            'RAOWA remains the superior body; the Temple Trust works under EC guidance as an integral part of the society. A formal agreement is to be drawn up.',
        },
        {
          topic: '5C compound wall reconstruction',
          initiator: 'M Gurunath',
          detail:
            'Approved: the damaged 11ft wall beside 5C play area will be rebuilt deeper, connecting the 5B wall to the CH wall. Basketball/beach volleyball in 5B, box cricket in 5C; kids play items shifted to 4E fruit garden. To proceed after consultation with 5B residents.',
        },
        {
          topic: 'Budget approval for works over ₹1 lakh',
          initiator: 'Mahesh Masade',
          detail:
            'Members approved spends above ₹1 lakh for the 5C wall reconstruction and new society speakers (existing ones beyond repair).',
        },
        {
          topic: 'Advance annual maintenance',
          initiator: 'Chukka Satyanarayana',
          detail:
            'Approved to continue collecting advance yearly maintenance at ₹9,600 per plot, same as previous years.',
        },
        {
          topic: 'Maintenance drives for arrears',
          initiator: 'Chukka Satyanarayana',
          detail:
            'A dedicated maintenance drive team with a representative from each lane will run monthly drives to recover long-pending dues.',
        },
      ],
    },
  },
  {
    id: 'm-ec-2026-02',
    title: 'EC Monthly Meeting — February 2026',
    type: 'EC Meeting',
    date: '2026-02-08',
    time: '6:30 PM',
    venue: 'Community Hall (CH)',
    status: 'held',
    agenda: ['Sri Rama Navami planning', 'Manjeera line repairs', 'Arrears review', 'CCTV AMC renewal'],
    minutes: {
      attendees: 22,
      summary:
        'EC reviewed Sri Rama Navami arrangements, approved Manjeera maintenance and line-man batta, and reviewed lane-wise arrears ahead of the March drive.',
      decisions: [
        { topic: 'Sri Rama Navami', detail: 'Annadanam for ~800; cook, decoration and grocery advances approved.' },
        { topic: 'Manjeera lines', detail: 'February maintenance and line-man batta cleared.' },
      ],
    },
  },
  {
    id: 'm-temple-2026-01',
    title: 'Temple Trust Review',
    type: 'Temple Trust',
    date: '2026-01-18',
    time: '11:00 AM',
    venue: 'Temple Area (2B)',
    status: 'held',
    agenda: ['Structural (pillars) work planning', 'Funds status', 'Idol relocation plan'],
    minutes: {
      attendees: 35,
      summary:
        'Trust reviewed collections (~₹22.8 L incl. Vinayaka Chavthi laddu auction) against the ~₹1.5 Cr construction estimate. Structural pillar work to begin once ₹50 L is in hand.',
      decisions: [
        { topic: 'Idol relocation', detail: 'Temporarily shift Naga devatha, Shiva Lingam and Nandi to South-East during construction.' },
      ],
    },
  },
  {
    id: 'm-agm-2026',
    title: 'Annual General Body Meeting 2026',
    type: 'AGM',
    date: '2026-06-14',
    time: '5:00 PM',
    venue: 'Community Hall (CH)',
    status: 'upcoming',
    agenda: [
      'Year 2025–26 development review',
      'Audited accounts approval',
      'Temple construction progress',
      '1A/1B/1C & 4A road UGD and CC road laying',
      'Byelaws updation & renewal of registration',
      'EC nominations for 2026–28',
    ],
  },
  {
    id: 'm-ec-2026-04',
    title: 'EC Monthly Meeting — April 2026',
    type: 'EC Meeting',
    date: '2026-04-12',
    time: '6:30 PM',
    venue: 'Community Hall (CH)',
    status: 'upcoming',
    agenda: ['March balance sheet review', 'Missing drainage manhole covers', 'Summer water planning', 'Arrears drive results'],
  },
]

/* ------------------------------------------------------------------ */
/* Finances / Audit                                                    */
/* ------------------------------------------------------------------ */

export const financialStatements: FinancialStatement[] = [
  {
    id: 'fin-2026-03',
    title: 'Monthly Balance Sheet, March 2026',
    period: 'March 2026',
    category: 'Monthly',
    openingBalance: 668650.66,
    income: 294039,
    expense: 329358,
    closingBalance: 633331.66,
    audited: false,
    lineItems: [
      { label: 'Balance carried forward', amount: 668650.66, type: 'income' },
      { label: 'Maintenance collections via NoBroker', amount: 38200, type: 'income' },
      { label: 'Maintenance via RazorpayX', amount: 1000, type: 'income' },
      { label: 'UPI credits, mostly Sri Rama Navami donations', amount: 254839, type: 'income' },
      { label: 'Watchman salaries for February (Balaya, Hanumanthu, SSK Security)', amount: 122125, type: 'expense' },
      { label: 'Electricity, gate arches and Community Hall', amount: 10585, type: 'expense' },
      { label: 'NMC and Manjeera maintenance, line-man batta', amount: 8500, type: 'expense' },
      { label: 'Sri Rama Navami festival (cook, groceries, decoration, pujari)', amount: 171024, type: 'expense' },
      { label: 'Mosquito fogging, diesel and petrol', amount: 6810, type: 'expense' },
      { label: 'BL to 1B iron gate, JCB and fabrication', amount: 4700, type: 'expense' },
      { label: 'Watchman room mosquito mesh', amount: 3800, type: 'expense' },
      { label: 'CH upkeep, water cans and society phone', amount: 1814, type: 'expense' },
    ],
  },
  {
    id: 'fin-2026-02',
    title: 'Monthly Balance Sheet, February 2026',
    period: 'February 2026',
    category: 'Monthly',
    openingBalance: 786479.66,
    income: 38700,
    expense: 156529,
    closingBalance: 668650.66,
    audited: false,
    lineItems: [
      { label: 'Balance carried forward', amount: 786479.66, type: 'income' },
      { label: 'Maintenance collections via NoBroker', amount: 26700, type: 'income' },
      { label: 'Community Hall bookings (3)', amount: 12000, type: 'income' },
      { label: 'Watchman salaries for January (Balaya, Hanumanthu, SSK Security)', amount: 123532, type: 'expense' },
      { label: 'Electricity, gate arches and Community Hall', amount: 10890, type: 'expense' },
      { label: 'NMC and Manjeera maintenance, line-man batta', amount: 8500, type: 'expense' },
      { label: 'Manjeera pits, material and civil labour', amount: 5240, type: 'expense' },
      { label: 'Community Hall upkeep and function service', amount: 4175, type: 'expense' },
      { label: 'New Year housie game gifts', amount: 2280, type: 'expense' },
      { label: 'Mosquito fogging diesel', amount: 1912, type: 'expense' },
    ],
  },
  {
    id: 'fin-2026-01',
    title: 'Monthly Balance Sheet, January 2026',
    period: 'January 2026',
    category: 'Monthly',
    openingBalance: 916007.66,
    income: 81194,
    expense: 211022,
    closingBalance: 786179.66,
    audited: false,
    lineItems: [
      { label: 'Balance carried forward', amount: 916007.66, type: 'income' },
      { label: 'Bank interest capitalised', amount: 7964, type: 'income' },
      { label: 'Maintenance collections via NoBroker', amount: 60800, type: 'income' },
      { label: 'Community Hall bookings (2)', amount: 8000, type: 'income' },
      { label: 'New Year housie game collection', amount: 4430, type: 'income' },
      { label: 'Watchman salaries for December (Balaya, Hanumanthu, SSK Security)', amount: 120837, type: 'expense' },
      { label: 'Electricity, gate arches and Community Hall', amount: 11516, type: 'expense' },
      { label: 'NMC and Manjeera maintenance, line-man batta', amount: 8500, type: 'expense' },
      { label: 'Medical advance to watchman Balaya (recovered 2,000 a month)', amount: 40000, type: 'expense' },
      { label: 'Mosquito fogging, diesel, petrol and tips', amount: 11423, type: 'expense' },
      { label: 'New Year celebrations, tables, banner and housie', amount: 5380, type: 'expense' },
      { label: 'Bhogi and Republic Day', amount: 6970, type: 'expense' },
      { label: 'Manjeera chamber iron caps and CH waste pipe', amount: 6200, type: 'expense' },
      { label: 'Security water cans and sundries', amount: 196, type: 'expense' },
    ],
  },
  {
    id: 'fin-audit-2025-26',
    title: 'Annual Audited Accounts 2025–26',
    period: 'FY 2025–26',
    category: 'Annual Audit',
    openingBalance: 512000,
    income: 4620000,
    expense: 4781150,
    closingBalance: 350850,
    audited: true,
    auditor: 'M/s. Registered Chartered Accountants',
    lineItems: [
      { label: 'Annual maintenance collections (advance + arrears)', amount: 4180000, type: 'income' },
      { label: 'Community Hall bookings', amount: 240000, type: 'income' },
      { label: 'Interest & miscellaneous', amount: 200000, type: 'income' },
      { label: 'Security & housekeeping salaries', amount: 1620000, type: 'expense' },
      { label: 'Electricity & water (Manjeera/bore)', amount: 640000, type: 'expense' },
      { label: 'CC roads, drainage & civil works', amount: 1480000, type: 'expense' },
      { label: 'Festivals & cultural events', amount: 620000, type: 'expense' },
      { label: 'Administrative & repairs', amount: 421150, type: 'expense' },
    ],
  },
  {
    id: 'fin-ganesh-2024',
    title: 'Ganesh Chaturthi 2024 — Balance Sheet',
    period: 'September 2024',
    category: 'Festival',
    income: 486000,
    expense: 452300,
    closingBalance: 33700,
    audited: true,
    auditor: 'Cultural Sub-committee',
    lineItems: [
      { label: 'Donations from residents', amount: 486000, type: 'income' },
      { label: 'Annaprasadam (800 persons, 9 days)', amount: 210000, type: 'expense' },
      { label: 'Idol, pandal & decoration', amount: 132300, type: 'expense' },
      { label: 'Cultural events & prizes', amount: 60000, type: 'expense' },
      { label: 'Pooja items & priest', amount: 50000, type: 'expense' },
    ],
  },
  {
    id: 'fin-vinayaka-2025',
    title: 'Vinayaka Chavthi 2025 — Balance Sheet',
    period: 'September 2025',
    category: 'Festival',
    income: 512000,
    expense: 335000,
    closingBalance: 177000,
    audited: true,
    auditor: 'Cultural Sub-committee',
    lineItems: [
      { label: 'Donations & laddu auction', amount: 512000, type: 'income' },
      { label: 'Annaprasadam & disposables', amount: 180000, type: 'expense' },
      { label: 'Decoration & sound', amount: 95000, type: 'expense' },
      { label: 'Pooja & priest', amount: 60000, type: 'expense' },
    ],
  },
  {
    id: 'fin-ramanavami-2026',
    title: 'Sri Rama Navami 2026, Balance Sheet',
    period: 'March and April 2026',
    category: 'Festival',
    openingBalance: 293913,
    income: 257879,
    expense: 250183,
    closingBalance: 301609,
    audited: false,
    lineItems: [
      { label: 'Balance carried forward', amount: 293913, type: 'income' },
      { label: 'Donations, general and Annaprasadam', amount: 245669, type: 'income' },
      { label: 'Hundi collection', amount: 12210, type: 'income' },
      { label: 'Tent house', amount: 78000, type: 'expense' },
      { label: 'Groceries, vegetables and curd', amount: 70860, type: 'expense' },
      { label: 'Stage and idol decoration, flowers and banner', amount: 32090, type: 'expense' },
      { label: 'Sannai (nadaswaram) musicians', amount: 20500, type: 'expense' },
      { label: 'Cook, kitchen team and vessel cleaning', amount: 18300, type: 'expense' },
      { label: 'Disposables', amount: 10500, type: 'expense' },
      { label: 'Pooja items, pujari fee, dhoti and saree', amount: 7383, type: 'expense' },
      { label: 'Water cans and cooking water', amount: 7340, type: 'expense' },
      { label: 'Electrical work, batteries and sundries', amount: 5210, type: 'expense' },
    ],
  },
  {
    id: 'fin-newyear-bhogi-2026',
    title: 'New Year, Bhogi and Republic Day 2026, Balance Sheet',
    period: 'December 2025 to February 2026',
    category: 'Festival',
    openingBalance: 311693,
    income: 4430,
    expense: 22210,
    closingBalance: 293913,
    audited: false,
    lineItems: [
      { label: 'Balance carried forward', amount: 311693, type: 'income' },
      { label: 'Housie game ticket sales', amount: 4430, type: 'income' },
      { label: 'New Year cake (7 kg)', amount: 6930, type: 'expense' },
      { label: 'New Year tables, banner and decoration', amount: 4950, type: 'expense' },
      { label: 'Housie game prizes', amount: 2280, type: 'expense' },
      { label: 'Water cans, dustbin covers and CH cleaning', amount: 1230, type: 'expense' },
      { label: 'Bhogi tea and biscuits', amount: 680, type: 'expense' },
      { label: 'Republic Day flags, snacks, flowers and coconuts', amount: 6140, type: 'expense' },
    ],
  },
  {
    id: 'fin-temple-2026',
    title: 'Temple Trust Fund Statement',
    period: 'As of March 2026',
    category: 'Temple',
    income: 2280000,
    expense: 850000,
    closingBalance: 1430000,
    audited: true,
    auditor: 'Temple Trust',
    lineItems: [
      { label: 'Pledged & received donations (~35 families)', amount: 2100000, type: 'income' },
      { label: 'Vinayaka Chavthi laddu auction (RAOWA)', amount: 176000, type: 'income' },
      { label: 'Other contributions', amount: 4000, type: 'income' },
      { label: 'Bhoomi pooja & homam', amount: 250000, type: 'expense' },
      { label: 'Bore well (1300 ft) & electricity meter', amount: 450000, type: 'expense' },
      { label: 'Soil test & architecture design', amount: 150000, type: 'expense' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Maintenance dues                                                    */
/* ------------------------------------------------------------------ */

// A representative sample of the ~480 plots (real owner names appear in
// association records). Generated deterministically for the remaining plots.
const seedOwners: [string, string, string, MaintenanceRecord['status'], number][] = [
  ['96', '1C', 'T G Swathi', 'paid', 0],
  ['423', '1B', 'Yeluka Vamshi Charan Reddy', 'paid', 0],
  ['433', '1B', 'Sitharamachandra Rao Kailasam', 'paid', 0],
  ['419', '1C', 'Ashok Allu', 'paid', 0],
  ['127', '1C', 'Aedelli Prashanth', 'partial', 4800],
  ['120', '2C', 'Saraswathi Mamidi', 'paid', 0],
  ['119', '2C', 'Sagi Dinesh Varma', 'paid', 0],
  ['113', '2C', 'Jayanthi Venkata Satish', 'due', 9600],
  ['381', '2A', 'Ganga Reddy Kallem', 'paid', 0],
  ['383', '2A', 'Manjula Kotthireddy', 'partial', 4800],
  ['69', '2D', 'Tondepu Naresh', 'paid', 0],
  ['71', '2D', 'Chilakamarthi Subrahmanyam', 'due', 19200],
  ['289', '3A', 'Ashish', 'paid', 0],
  ['344', '3A', 'Road 3A Apartment', 'due', 9600],
  ['203', '3C', 'Kiran Kumar Rajarikam', 'paid', 0],
  ['195', '4A', 'Jayavardhan Chamala', 'partial', 4800],
  ['320', '4A', 'Rajesh Dharmapuri', 'paid', 0],
  ['249', '4B', 'Mereti Venkata Ramana Kumar', 'paid', 0],
  ['255', '4B', 'M Venkat Rao', 'due', 9600],
  ['448', '4B', 'Mahendar Nalla', 'paid', 0],
  ['169', '4C', 'Arrabelly Rajeshwar Rao', 'paid', 0],
  ['304', '5A', 'Kusam Ramesh Reddy', 'paid', 0],
  ['424', '5A', 'Sunit Pujari', 'paid', 0],
  ['24', '5E', 'Sreenivas Sunkara', 'due', 28800],
  ['111', '5B', 'Krishnamurthy', 'paid', 0],
  ['56', '5B', 'Syam Sundarrao Ari', 'paid', 0],
  ['38', '5B', 'Kassetty Vasundhara Devi', 'partial', 4800],
]

export const maintenanceRecords: MaintenanceRecord[] = seedOwners.map(
  ([plotNo, road, owner, status, dueAmount]) => ({
    plotNo,
    road,
    owner,
    status,
    dueAmount,
    paidAmount: status === 'paid' ? 9600 : status === 'partial' ? 9600 - dueAmount : 0,
    lastPaid:
      status === 'due' ? '2024-05-20' : status === 'partial' ? '2025-08-11' : '2025-06-10',
  }),
)

export const maintenanceSummary = {
  ratePerPlot: society.annualMaintenance,
  totalPlots: society.totalPlots,
  paidPlots: 372,
  partialPlots: 44,
  duePlots: 64,
  get collected() {
    return this.paidPlots * society.annualMaintenance + this.partialPlots * 4800
  },
  get outstanding() {
    return this.duePlots * society.annualMaintenance + this.partialPlots * 4800
  },
}

/* ------------------------------------------------------------------ */
/* Amenities                                                           */
/* ------------------------------------------------------------------ */

export const amenities: Amenity[] = [
  { id: 'a1', name: 'Community Hall (CH)', category: 'Common', location: 'Central, 5C lane', description: 'Air-cooled hall for functions, meetings and festival annadanam. Stainless steel hand-wash sink installed.', status: 'available', bookable: true, timings: '6:00 AM – 10:00 PM' },
  { id: 'a2', name: '1C Park', category: 'Park', location: 'Road 1C', description: 'Landscaped park with walking path and seating.', status: 'available', bookable: false, timings: '5:00 AM – 9:00 PM' },
  { id: 'a3', name: '4E Fruit Garden', category: 'Park', location: 'Road 4E', description: 'Fruit garden with relocated kids play items.', status: 'available', bookable: false, timings: '5:00 AM – 9:00 PM' },
  { id: 'a4', name: '5B Play Area', category: 'Sports', location: 'Road 5B', description: 'Basketball and beach volleyball court.', status: 'available', bookable: true, timings: '5:00 AM – 10:00 PM' },
  { id: 'a5', name: 'Gym', category: 'Sports', location: 'Community Hall', description: 'Gym inside the Community Hall.', status: 'available', bookable: false },
  { id: 'a6', name: 'Badminton Court', category: 'Sports', location: 'Community Hall', description: 'Nets and equipment available for members.', status: 'available', bookable: true, timings: '5:00 AM – 10:00 PM' },
  { id: 'a7', name: 'Table Tennis', category: 'Sports', location: 'Community Hall', description: 'Indoor TT table with equipment.', status: 'available', bookable: true },
  { id: 'a8', name: 'Sri Naga Venkateswara Swamy Temple', category: 'Spiritual', location: 'Road 2B', description: 'Temple with new 1300 ft bore well. Construction in progress by the Temple Trust.', status: 'planned', bookable: false, timings: '6:00 AM – 8:00 PM' },
  { id: 'a9', name: 'Senior Citizen Sitting Zone', category: 'Common', location: 'Between 5B–5C (Neem tree)', description: 'Landscaped sitting zone with benches.', status: 'planned', bookable: false },
  { id: 'a10', name: 'CCTV Surveillance', category: 'Security', location: 'All gates & lanes', description: 'CCTV coverage across gates and lanes for security.', status: 'available', bookable: false, timings: '24x7' },
]

/* ------------------------------------------------------------------ */
/* Rentals                                                             */
/* ------------------------------------------------------------------ */

export const rentals: Rental[] = [
  { id: 'r1', plotNo: '96', road: '1C', type: 'Independent House', bhk: '3 BHK', rent: 28000, deposit: 100000, furnishing: 'Semi-furnished', area: 2400, available: '2026-05-01', contactName: 'T G Swathi', contactPhone: '+91 98765 10096', amenities: ['Car parking', 'Bore + Manjeera water', 'Power backup'], status: 'available' },
  { id: 'r2', plotNo: '249', road: '4B', type: 'Villa', bhk: '4 BHK', rent: 45000, deposit: 200000, furnishing: 'Fully furnished', area: 3200, available: '2026-04-15', contactName: 'Mereti Venkata Ramana', contactPhone: '+91 98765 10249', amenities: ['Modular kitchen', 'Car + bike parking', 'Solar heater', 'CCTV'], status: 'available' },
  { id: 'r3', plotNo: '113', road: '2C', type: 'Duplex', bhk: '3 BHK', rent: 32000, deposit: 120000, furnishing: 'Semi-furnished', area: 2600, available: '2026-06-01', contactName: 'Jayanthi Venkata Satish', contactPhone: '+91 98765 10113', amenities: ['Car parking', 'Balcony garden', 'Water softener'], status: 'available' },
  { id: 'r4', plotNo: '304', road: '5A', type: 'Independent House', bhk: '2 BHK', rent: 18000, deposit: 60000, furnishing: 'Unfurnished', area: 1500, available: '2026-04-20', contactName: 'Kusam Ramesh Reddy', contactPhone: '+91 98765 10304', amenities: ['Bike parking', 'Manjeera water'], status: 'available' },
  { id: 'r5', plotNo: '320', road: '4A', type: 'Portion', bhk: '2 BHK', rent: 15000, deposit: 50000, furnishing: 'Semi-furnished', area: 1200, available: '2026-05-10', contactName: 'Rajesh Dharmapuri', contactPhone: '+91 98765 10320', amenities: ['Independent entrance', 'Water supply'], status: 'available' },
  { id: 'r6', plotNo: '56', road: '5B', type: 'Villa', bhk: '4 BHK', rent: 52000, deposit: 250000, furnishing: 'Fully furnished', area: 3500, available: '2026-03-01', contactName: 'Syam Sundarrao Ari', contactPhone: '+91 98765 10056', amenities: ['Home theatre', 'Landscaped garden', 'Power backup', 'CCTV'], status: 'rented' },
]

/* ------------------------------------------------------------------ */
/* Requests / Complaints                                               */
/* ------------------------------------------------------------------ */

export const serviceRequests: ServiceRequest[] = [
  {
    id: 'req-1', ticketNo: 'RA-2026-0148', category: 'drainage', title: 'Missing drainage manhole cover near 4B',
    description: 'Open manhole beside plot 255 on Road 4B — safety hazard for children and two-wheelers.',
    plotNo: '255', road: '4B', raisedBy: 'M Venkat Rao', raisedOn: '2026-03-22', status: 'in-progress', priority: 'high', assignedTo: 'NMC Coordination',
    updates: [
      { on: '2026-03-22', note: 'Ticket raised, temporary barricade placed.' },
      { on: '2026-03-25', note: 'Request forwarded to NMC for manhole cover.' },
    ],
  },
  {
    id: 'req-2', ticketNo: 'RA-2026-0151', category: 'sanitation', title: 'Garbage not collected in 2D lane',
    description: 'Garbage pickup missed for 3 days in Road 2D. Requesting fogging as well.',
    plotNo: '69', road: '2D', raisedBy: 'Tondepu Naresh', raisedOn: '2026-03-24', status: 'resolved', priority: 'medium', assignedTo: 'Housekeeping',
    updates: [
      { on: '2026-03-24', note: 'Reported to housekeeping supervisor.' },
      { on: '2026-03-25', note: 'Collection resumed; fogging done with 20L diesel.' },
    ],
  },
  {
    id: 'req-3', ticketNo: 'RA-2026-0155', category: 'cctv', title: 'CCTV footage request — West gate',
    description: 'Request footage from West gate arch camera for 21 Mar, 8–10 PM regarding a vehicle scratch.',
    plotNo: '433', road: '1B', raisedBy: 'Sitharamachandra Rao', raisedOn: '2026-03-26', status: 'open', priority: 'medium', assignedTo: 'Security (SSK)',
    updates: [{ on: '2026-03-26', note: 'Footage retrieval scheduled with security agency.' }],
  },
  {
    id: 'req-4', ticketNo: 'RA-2026-0156', category: 'water-power', title: 'Voltage fluctuation in 3A lane',
    description: 'Frequent voltage drops in Road 3A despite new transformer. Appliances affected.',
    plotNo: '344', road: '3A', raisedBy: 'M Gurunath', raisedOn: '2026-03-27', status: 'in-progress', priority: 'high', assignedTo: 'Electrical + TSSPDCL',
    updates: [
      { on: '2026-03-27', note: 'Logged; electrician inspecting distribution line.' },
      { on: '2026-03-29', note: 'TSSPDCL complaint registered for line balancing.' },
    ],
  },
  {
    id: 'req-5', ticketNo: 'RA-2026-0159', category: 'roads', title: 'CC road patch needed near 1E',
    description: 'Potholes forming on the recently laid 1E CC road after rains.',
    plotNo: '12', road: '1E', raisedBy: 'Resident', raisedOn: '2026-03-28', status: 'open', priority: 'low', assignedTo: 'Infrastructure',
    updates: [{ on: '2026-03-28', note: 'Ticket raised, site inspection pending.' }],
  },
  {
    id: 'req-6', ticketNo: 'RA-2026-0161', category: 'water-power', title: 'Street light not working — 5A',
    description: 'Two street lights near plot 304, Road 5A are off for a week.',
    plotNo: '304', road: '5A', raisedBy: 'Kusam Ramesh Reddy', raisedOn: '2026-03-29', status: 'resolved', priority: 'low', assignedTo: 'Electrical',
    updates: [
      { on: '2026-03-29', note: 'Reported to society electrician.' },
      { on: '2026-03-30', note: 'Both lights replaced and working.' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Announcements (dashboard)                                           */
/* ------------------------------------------------------------------ */

export const announcements = [
  { id: 'an-1', date: '2026-03-30', title: 'Sri Rama Navami Annadanam — Thank you', body: 'Kalyana Mahotsavam and annadanam for ~800 devotees completed successfully. Thanks to all volunteers and donors.', tag: 'Festival' },
  { id: 'an-2', date: '2026-03-18', title: 'Advance maintenance for 2026–27 open', body: 'Advance annual maintenance of ₹9,600 per plot is now open. Pay via NoBroker or UPI to the RAOWA account.', tag: 'Maintenance' },
  { id: 'an-3', date: '2026-03-10', title: 'Monthly maintenance drive — March', body: 'Lane representatives will visit to collect long-pending dues. Please keep receipts ready.', tag: 'Drive' },
  { id: 'an-4', date: '2026-02-28', title: '5C compound wall reconstruction', body: 'Work to begin after final consultation with 5B residents. Box cricket to come up in 5C.', tag: 'Works' },
]
