import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Section({
  id,
  title,
  lead,
  children,
  className,
}: {
  id?: string
  title: string
  lead?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20", className)}>
      <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] font-semibold">{title}</h2>
      {lead && <p className="mt-2 max-w-[60ch] text-muted-foreground">{lead}</p>}
      <div className="mt-9">{children}</div>
    </section>
  )
}
