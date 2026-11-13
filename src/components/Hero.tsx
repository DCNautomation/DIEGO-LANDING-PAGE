import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { strip } from "@/data"

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

        <img
          src="/img/ME.png"
          alt="Portrait of Diego Nodado"
          className="mx-auto aspect-[4/5] w-full max-w-[22rem] rounded-2xl border object-cover md:ml-auto"
        />
      </div>

      <dl className="mt-16 grid grid-cols-1 overflow-hidden rounded-xl border bg-card sm:grid-cols-3 md:mt-20">
        {strip.map((s) => (
          <div key={s.title} className="border-b px-5 py-5 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0">
            <dt className="text-sm font-semibold">{s.title}</dt>
            <dd className="mt-1 text-xs text-muted-foreground">{s.note}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
