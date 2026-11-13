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
      </ul>
    </Section>
  )
}
