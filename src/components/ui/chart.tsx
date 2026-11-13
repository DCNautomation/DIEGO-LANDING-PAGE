import * as React from "react"
import * as RechartsPrimitive from "recharts"
import { cn } from "@/lib/utils"

export type ChartConfig = Record<string, { label?: React.ReactNode; color?: string }>

const ChartContext = React.createContext<{ config: ChartConfig } | null>(null)

function ChartContainer({
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"]
}) {
  const vars = Object.fromEntries(
    Object.entries(config)
      .filter(([, v]) => v.color)
      .map(([k, v]) => [`--color-${k}`, v.color])
  ) as React.CSSProperties
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        style={vars}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line]:stroke-border/60 [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-layer]:outline-hidden [&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}
      >
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<{ value?: number | string; name?: string; dataKey?: string }>
  label?: string
}) {
  const ctx = React.useContext(ChartContext)
  if (!active || !payload?.length) return null
  const item = payload[0]
  const name = ctx?.config[String(item.dataKey)]?.label ?? item.name
  return (
    <div className="grid min-w-[8rem] gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl">
      <div className="font-medium">{label}</div>
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-0.5 rounded-[2px] bg-[var(--color-count)]" />
        <span className="text-muted-foreground">{name}</span>
        <span className="ml-auto font-mono font-medium text-foreground tabular-nums">{item.value}</span>
      </div>
    </div>
  )
}

export { ChartContainer, ChartTooltip, ChartTooltipContent }
