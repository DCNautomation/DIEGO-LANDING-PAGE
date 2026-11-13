import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { Section } from "@/components/Section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { projects, stacks } from "@/data"

// Real data: how many of the three systems above use each technology.
const counts = new Map<string, number>()
for (const p of projects) for (const t of p.stack) counts.set(t, (counts.get(t) ?? 0) + 1)
const chartData = [...counts.entries()]
  .filter(([, n]) => n >= 2)
  .map(([tech, count]) => ({ tech, count }))
  .sort((a, b) => b.count - a.count || a.tech.localeCompare(b.tech))

const chartConfig = {
  count: { label: "Systems using it", color: "var(--chart-1)" },
} satisfies ChartConfig

export function Stacks() {
  return (
    <Section
      title="Stacks I build with"
      lead="The combinations I reach for first, each one proven in a project above."
      className="border-t"
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="grid gap-4">
          {stacks.map((s) => (
            <Card key={s.title} className="gap-3">
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
                <CardDescription>{s.text}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <Badge key={t} variant="outline">{t}</Badge>
                ))}
              </CardContent>
              <CardFooter className="text-xs text-muted-foreground">{s.used}</CardFooter>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>What shows up most</CardTitle>
            <CardDescription>Technologies used in two or more of the three systems</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="aspect-auto h-[300px] w-full">
              <BarChart
                accessibilityLayer
                data={chartData}
                layout="vertical"
                margin={{ left: 0, right: 24 }}
              >
                <CartesianGrid horizontal={false} />
                <YAxis dataKey="tech" type="category" tickLine={false} axisLine={false} tickMargin={8} width={92} />
                <XAxis dataKey="count" type="number" hide domain={[0, 3]} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="var(--color-count)" radius={4} barSize={18} isAnimationActive={false}>
                  <LabelList dataKey="count" position="right" offset={8} className="fill-foreground" fontSize={12} />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground">
            Counted from the stack lists of Trusvana, Automation Hub and Veliora Stock.
          </CardFooter>
        </Card>
      </div>

      <div className="mt-6 rounded-xl border bg-accent/50 p-5">
        <h3 className="font-display text-lg font-semibold">How I build</h3>
        <p className="mt-1.5 max-w-[70ch] text-sm leading-relaxed text-muted-foreground">
          I can code. Since AI-assisted coding is available, I choose to build with Claude Code because it gets working software out faster.
        </p>
      </div>
    </Section>
  )
}
