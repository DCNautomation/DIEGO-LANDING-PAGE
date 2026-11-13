import { Section } from "@/components/Section"
import { ShotButton } from "@/components/Lightbox"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { n8nWork, proofShots, recentWork } from "@/data"

function Grid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((i) => (
        <Card key={i.title} className="gap-2">
          <CardHeader>
            <CardTitle>{i.title}</CardTitle>
            <CardDescription className="leading-relaxed">{i.text}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}

export function AutomationWork() {
  return (
    <Section
      title="More automation work"
      lead="The n8n workflows I have designed and the tools I run end to end."
      className="border-t"
    >
      <Tabs defaultValue="n8n">
        <TabsList>
          <TabsTrigger value="n8n">n8n workflows</TabsTrigger>
          <TabsTrigger value="recent">Recent work</TabsTrigger>
        </TabsList>
        <TabsContent value="n8n">
          <Grid items={n8nWork} />
        </TabsContent>
        <TabsContent value="recent">
          <Grid items={recentWork} />
          <p className="mt-6 text-sm text-muted-foreground">
            Full workflow exports, screen recordings, and source available on request.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {proofShots.map((s) => (
              <ShotButton key={s.src} shot={s} className="aspect-[16/10]" />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Section>
  )
}
