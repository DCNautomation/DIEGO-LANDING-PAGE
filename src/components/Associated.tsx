import { Plane } from "lucide-react"
import { Section } from "@/components/Section"
import { associated } from "@/data"

export function Associated() {
  return (
    <Section title="Associated projects" lead="Client and team builds I contributed to." className="border-t">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {associated.map((a) => (
          <li key={a.name}>
            <img
              src={a.src}
              alt={`${a.name} screenshot`}
              loading="lazy"
              className="aspect-[16/10] w-full rounded-lg border object-cover object-top"
            />
            <p className="mt-2 text-sm font-semibold">{a.name}</p>
            <p className="text-xs text-muted-foreground">{a.note}</p>
          </li>
        ))}
        <li className="flex gap-4 rounded-xl border bg-card p-5 sm:col-span-2 lg:col-span-1">
          <Plane className="mt-0.5 size-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-semibold">Before automation: aviation safety & compliance</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Two years as an Aviation Safety & Compliance Officer at Lufthansa Technik Philippines: safety policy, incident investigations, audits, and technical logbooks kept to full regulatory standard. That discipline for structured documentation and process control carries into every system I build.
            </p>
          </div>
        </li>
      </ul>
    </Section>
  )
}
