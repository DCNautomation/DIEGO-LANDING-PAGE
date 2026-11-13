import { CheckCircle2, CircleAlert, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { strip } from "@/data"

const board = [
  { task: "Inbox triaged, calendar conflicts cleared", status: "Done", tone: "ok" as const },
  { task: "New lead routed to an agent", status: "Done", tone: "ok" as const },
  { task: "CRM sync from the web form", status: "Retrying", tone: "retry" as const },
  { task: "Invoice waiting on approval", status: "Needs attention", tone: "warn" as const },
]

function StatusBadge({ tone, children }: { tone: "ok" | "retry" | "warn"; children: string }) {
  if (tone === "ok")
    return (
      <Badge variant="secondary" className="text-accent-foreground">
        <CheckCircle2 className="size-3.5 text-ok" />
        {children}
      </Badge>
    )
  if (tone === "retry")
    return (
      <Badge variant="outline">
        <RefreshCw className="pulse-dot size-3.5 text-primary" />
        {children}
      </Badge>
    )
  return (
    <Badge variant="warn">
      <CircleAlert className="size-3.5 text-warn" />
      {children}
    </Badge>
  )
}

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-12 md:px-8 md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Badge variant="outline" className="mb-6 gap-2 px-3 py-1">
            <span className="pulse-dot size-2 rounded-full bg-ok" />
            Open to new opportunities
          </Badge>
          <h1 className="text-[clamp(2.5rem,6vw,4.4rem)] leading-[1.02] font-bold">
            Diego Nodado runs the operations so the business runs on time.
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-muted-foreground">
            I&apos;m an executive assistant and AI automation specialist. I build n8n workflows, AI agent integrations, and CRM systems that keep inboxes at zero, calendars conflict-free, and pipelines moving without anyone babysitting them. I build the system, then I run it.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" className="h-11 px-6" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
            <Button size="lg" variant="outline" className="h-11 px-6" asChild>
              <a href="#projects">See my projects</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <img
            src="/img/ME.png"
            alt="Portrait of Diego Nodado"
            className="aspect-[4/5] w-full max-w-[22rem] rounded-2xl border object-cover md:ml-auto"
          />
          <Card className="row-in absolute -bottom-6 left-0 w-[min(100%,24rem)] gap-3 py-4 shadow-lg md:-left-6" style={{ animationDelay: "0.15s" }}>
            <div className="px-4">
              <p className="text-sm font-semibold">What a good week looks like on the board</p>
              <p className="text-xs text-muted-foreground">An illustration of how I track work, not live data</p>
            </div>
            <ul className="divide-y border-t">
              {board.map((r, i) => (
                <li
                  key={r.task}
                  className="row-in flex items-center justify-between gap-3 px-4 py-2.5 text-xs"
                  style={{ animationDelay: `${0.35 + i * 0.18}s` }}
                >
                  <span className="min-w-0 truncate">{r.task}</span>
                  <StatusBadge tone={r.tone}>{r.status}</StatusBadge>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      <dl className="mt-24 grid grid-cols-2 overflow-hidden rounded-xl border bg-card md:grid-cols-4">
        {strip.map((s, i) => (
          <div key={s.title} className={`px-5 py-5 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} ${i < 3 ? "md:border-r" : "md:border-r-0"}`}>
            <dt className="text-sm font-semibold">{s.title}</dt>
            <dd className="mt-1 text-xs text-muted-foreground">{s.note}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
