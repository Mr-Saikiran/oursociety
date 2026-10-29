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
  /** Time zone that decides what "today" is, e.g. when a meeting becomes past. */
  timeZone: 'Asia/Kolkata',

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
    { group: 'Block 3', blocks: ['3A', '3B', '3C', '3D'] },
    { group: 'Block 4', blocks: ['4A', '4B', '4C', '4D', '4E'] },
    { group: 'Block 5', blocks: ['5A', '5B', '5C', '5D', '5E'] },
  ],
  /** Block → landmark, highlighted on the Layout Plan page. */
  landmarks: {
    '2B': 'Temple',
    '3A': 'Park',
    '5C': 'Community Hall, Gym and Play Area',
    '1C': 'Park',
    '4E': 'Fruit Garden',
  } as Record<string, string>,
  gates: ['East Gate (arch)', 'West Gate (arch)', 'Main Entrance (BL to 1B)'],

  /** Search text for the Google Maps embed and directions link. */
  mapQuery: "Reddy's Avenue, Madhura Nagar, Nizampet, Hyderabad, Telangana 500090",
  mapCoords: { lat: 17.5190693, lng: 78.3877778 },
  /** The society's Google Maps place page. */
  mapUrl: 'https://www.google.com/maps/place/Reddy\'s+Avenue,+Madhura+Nagar,+Nizampet,+Hyderabad,+Telangana+500090/@17.5188903,78.3867302,606m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb8e00e5a509db:0xdaf771d68bd66732!8m2!3d17.5190693!4d78.3877778!16s%2Fg%2F11c558j01f',
  /** Scanned layout sketches in /public, shown under the map. */
  layoutSketches: [
    {
      title: 'Layout of plots',
      caption: 'Plots 1 to 506, 498 plots on 27 acres, scale 1:500. Belonging to K Raghava Reddy, s/o Narayana Reddy, and others.',
      image: '/layout/layout-plan-sketch.jpg',
      pdf: '/layout/layout-plan-sketch.pdf',
      width: 1847,
      height: 2400,
    },
    {
      title: 'Survey number sketch (revenue)',
      caption: 'Survey nos. 53 to 65, 109, 110 to 126 and 130 to 132 at Nizampet (V), Bachupally (M), Medchal Malkajgiri Dist. Attested by the Tahsil Surveyor, Bachupally.',
      image: '/layout/survey-sketch.jpg',
      pdf: '/layout/survey-sketch.pdf',
      width: 2400,
      height: 1697,
    },
  ],

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
