// Everything that identifies your community lives in this folder.
// To run the app for another society, edit this file and the seed data in
// society/data.ts and society/data-extra.ts. App code never hardcodes names.

export const society = {
  /** Product name shown in the sidebar, browser tab and installed app. */
  appName: 'OurSociety',
  name: "Reddy's Avenue Owners Welfare Association",
  shortName: "Reddy's Avenue",
  acronym: 'RAOWA',
  regNo: '1374/2014',
  location: 'Nizampet, Hyderabad, Telangana',
  pincode: '500090',
  established: 2014,
  totalPlots: 480,
  /** Annual maintenance per unit, in `currency`. */
  annualMaintenance: 9600,
  /** Where the maintenance rate was approved, shown under the rate. */
  maintenanceApprovedAt: 'AGM 2025',
  /** Financial year the maintenance figures cover. */
  maintenanceYear: '2025–26',
  /** Prefix for request ticket numbers, e.g. RA-2026-0001. */
  ticketPrefix: 'RA',
  /** Square logo in /public, shown in the sidebar. */
  logo: '/raowa-logo.png',

  /** Formatting for dates and money. */
  locale: 'en-IN',
  currency: 'INR',

  /**
   * What your community calls its units and the groups they sit in.
   * Apartments might use Flat / Block / blocks; layouts use Plot / Road / lanes.
   */
  terms: {
    unit: 'Plot',
    units: 'plots',
    block: 'Road',
    blocks: 'lanes',
  },

  /** Every block, road, tower or lane, grouped for the Layout Plan page. */
  layout: [
    { group: 'Block 1', blocks: ['1A', '1B', '1C', '1D', '1E'] },
    { group: 'Block 2', blocks: ['2A', '2B', '2C', '2D'] },
    { group: 'Block 3', blocks: ['3A', '3B', '3C'] },
    { group: 'Block 4', blocks: ['4A', '4B', '4C', '4D', '4E'] },
    { group: 'Block 5', blocks: ['5A', '5B', '5C', '5D', '5E'] },
  ],
  /** Block → landmark, highlighted on the Layout Plan page. */
  landmarks: {
    '2B': 'Temple',
    '5C': 'Community Hall & Box Cricket',
    '5B': 'Play Area',
    '1C': 'Park',
    '4E': 'Fruit Garden',
  } as Record<string, string>,
  gates: ['East Gate (arch)', 'West Gate (arch)', 'Main Entrance (BL to 1B)'],

  /** Search text for the Google Maps embed and directions link. */
  mapQuery: "Reddy's Avenue, Nizampet, Hyderabad, Telangana 500090",
  mapCoords: { lat: 17.5169, lng: 78.3876 },

  get roads() {
    return this.layout.flatMap((g) => g.blocks)
  },
}

/** Categories residents can file requests under. `icon` is a lucide-react icon name. */
export const requestCategories = [
  { id: 'sanitation', label: 'Sanitation & Garbage', icon: 'Trash2' },
  { id: 'drainage', label: 'Drainage & UGD', icon: 'Waves' },
  { id: 'cctv', label: 'CCTV & Security', icon: 'Cctv' },
  { id: 'water-power', label: 'Water & Electricity', icon: 'Zap' },
  { id: 'roads', label: 'Roads & Common Areas', icon: 'TrafficCone' },
] as const
