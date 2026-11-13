import { ExternalLink } from "lucide-react"
import { Section } from "@/components/Section"
import { ShotButton } from "@/components/Lightbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { projects, type Project } from "@/data"

function ProjectPanel({ p }: { p: Project }) {
  const [first, ...rest] = p.shots
  return (
    <div className="grid gap-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <h3 className="text-2xl font-semibold">{p.name}: {p.intro.charAt(0).toLowerCase() + p.intro.slice(1)}</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
          {p.demo && (
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href={p.demo.href} target="_blank" rel="noreferrer">
                  Open the live demo <ExternalLink />
                </a>
              </Button>
              <span className="text-xs text-muted-foreground">{p.demo.note}</span>
            </div>
          )}
          <div className="mt-6 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <Badge key={s} variant="outline">{s}</Badge>
            ))}
          </div>
        </div>
        <ShotButton shot={first} className="aspect-[16/10]" />
      </div>

      {rest.length > 0 && (
        <div className={`grid gap-4 ${rest.length > 2 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2"}`}>
          {rest.map((s) => (
            <ShotButton key={s.src} shot={s} className="aspect-[16/10]" />
          ))}
        </div>
      )}

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h4 className="font-display text-lg font-semibold">Problems it solves</h4>
          <dl className="mt-4 grid gap-5">
            {p.problems.map((x) => (
              <div key={x.title}>
                <dt className="text-sm font-semibold">{x.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{x.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">How it&apos;s built</h4>
          <Accordion type="single" collapsible className="mt-2">
            {p.built.map((b) => (
              <AccordionItem key={b.title} value={b.title}>
                <AccordionTrigger>{b.title}</AccordionTrigger>
                <AccordionContent>{b.text}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      title="Three systems I built"
      lead="Pick one to see the screenshots, the problems it solves, and how it is built."
      className="border-t"
    >
      <Tabs defaultValue={projects[0].id}>
        <TabsList className="sm:w-full sm:max-w-xl">
          {projects.map((p) => (
            <TabsTrigger key={p.id} value={p.id} className="flex-col items-start gap-0 py-2.5 text-left sm:items-center">
              <span className="text-foreground">{p.name}</span>
              <span className="hidden text-xs font-normal text-muted-foreground sm:block">{p.tagline}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {projects.map((p) => (
          <TabsContent key={p.id} value={p.id} className="mt-8">
            <ProjectPanel p={p} />
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  )
}
