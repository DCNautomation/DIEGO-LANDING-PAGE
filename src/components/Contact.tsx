import { ExternalLink, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contact } from "@/data"

export function Contact() {
  return (
    <footer id="contact" className="border-t bg-card">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="text-[clamp(1.9rem,3.6vw,2.8rem)] font-semibold">Let&apos;s talk</h2>
        <p className="mt-3 max-w-[48ch] text-lg text-muted-foreground">
          Tell me about the role, and I&apos;ll reply within a day.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button size="lg" className="h-11 px-6" asChild>
            <a href={`mailto:${contact.email}`}>
              <Mail /> Email me
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-11 px-6" asChild>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ExternalLink />
            </a>
          </Button>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <span className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">DN</span>
            Diego Nodado © 2026
          </span>
          <span>Executive Assistant and AI Automation Specialist</span>
        </div>
      </div>
    </footer>
  )
}
