import { Section } from "@/components/Section"
import { Badge } from "@/components/ui/badge"
import { toolGroups } from "@/data"

export function Tools() {
  return (
    <Section
      id="tools"
      title="Tools & platforms"
      lead="Grouped by where each one sits in the stack."
      className="border-t"
    >
      <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
        {toolGroups.map((g) => (
          <div key={g.group}>
            <h3 className="font-sans text-sm font-semibold tracking-normal">{g.group}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.tools.map((t) => (
                <Badge key={t} variant="secondary" className="px-3 py-1 text-sm font-normal">{t}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
