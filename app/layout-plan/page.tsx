import type { Metadata } from 'next'
import { MapPin, Navigation, Route, DoorOpen } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { society } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Layout Plan — Reddy\'s Avenue',
  description: 'Society location map and lane-wise layout of Reddy\'s Avenue, Nizampet.',
}

// Keyless Google Maps embed centered on the society location.
const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(society.mapQuery)}&z=16&output=embed`
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(society.mapQuery)}`

// Lanes grouped by block for a quick visual layout overview.
const blocks = [
  { block: 'Block 1', lanes: ['1A', '1B', '1C', '1D', '1E'] },
  { block: 'Block 2', lanes: ['2A', '2B', '2C', '2D'] },
  { block: 'Block 3', lanes: ['3A', '3B', '3C'] },
  { block: 'Block 4', lanes: ['4A', '4B', '4C', '4D', '4E'] },
  { block: 'Block 5', lanes: ['5A', '5B', '5C', '5D', '5E'] },
]

const landmarks: Record<string, string> = {
  '2B': 'Temple',
  '5C': 'Community Hall & Box Cricket',
  '5B': 'Play Area',
  '1C': 'Park',
  '4E': 'Fruit Garden',
}

const gates = ['East Gate (arch)', 'West Gate (arch)', 'Main Entrance (BL to 1B)']

export default function LayoutPlanPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        title="Layout Plan"
        description={`${society.name} is located in ${society.location}, spanning ${society.roads.length} lanes and ${society.totalPlots} plots.`}
        action={
          <Button nativeButton={false} render={<a href={directionsUrl} target="_blank" rel="noopener noreferrer" />}>
            <Navigation data-icon="inline-start" />
            Get directions
          </Button>
        }
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="overflow-hidden p-0 lg:col-span-2">
          <div className="aspect-[16/11] w-full sm:aspect-[16/9]">
            <iframe
              title="Reddy's Avenue location map"
              src={mapSrc}
              className="size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="flex items-center gap-2 border-t border-border p-4 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0 text-primary" />
            {society.location} — {society.pincode}
          </div>
        </Card>

        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <DoorOpen className="size-4 text-primary" />
                <CardTitle>Entry gates</CardTitle>
              </div>
              <CardDescription>CCTV monitored 24x7</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {gates.map((g) => (
                <div key={g} className="flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 text-sm">
                  <DoorOpen className="size-3.5 shrink-0 text-muted-foreground" />
                  {g}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                <CardTitle>Key landmarks</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {Object.entries(landmarks).map(([road, name]) => (
                <div key={road} className="flex items-center justify-between rounded-lg bg-secondary/50 px-3 py-2 text-sm">
                  <span>{name}</span>
                  <Badge variant="outline">Road {road}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="mt-4">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Route className="size-4 text-primary" />
            <CardTitle>Lane layout</CardTitle>
          </div>
          <CardDescription>All {society.roads.length} lanes across 5 blocks. Highlighted lanes have common amenities.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {blocks.map((b) => (
            <div key={b.block}>
              <p className="mb-2 text-xs font-medium text-muted-foreground">{b.block}</p>
              <div className="flex flex-wrap gap-2">
                {b.lanes.map((lane) => {
                  const hasLandmark = lane in landmarks
                  return (
                    <div
                      key={lane}
                      className={`flex min-w-[4.5rem] flex-col items-center rounded-xl border p-3 text-center ${
                        hasLandmark ? 'border-primary/40 bg-secondary/60' : 'border-border bg-card'
                      }`}
                    >
                      <span className="font-serif text-lg font-semibold">{lane}</span>
                      {hasLandmark && (
                        <span className="mt-0.5 text-[10px] leading-tight text-primary">{landmarks[lane]}</span>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
