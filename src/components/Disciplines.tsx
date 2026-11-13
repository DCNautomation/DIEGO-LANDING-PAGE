import { Check } from "lucide-react"
import { Section } from "@/components/Section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { disciplines } from "@/data"

export function Disciplines() {
  return (
    <Section
      id="what-i-do"
      title="What I do"
      lead="Three disciplines, one focus: fewer things falling through the cracks."
    >
      <Tabs defaultValue={disciplines[0].id}>
        <TabsList>
          {disciplines.map((d) => (
            <TabsTrigger key={d.id} value={d.id}>
              {d.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {disciplines.map((d) => (
          <TabsContent key={d.id} value={d.id} className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
            <p className="max-w-[48ch] text-lg leading-relaxed">{d.summary}</p>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {d.skills.map((s) => (
                <li key={s} className="flex gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  )
}
