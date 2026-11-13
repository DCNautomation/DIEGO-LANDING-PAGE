import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import type { Shot } from "@/data"
import { cn } from "@/lib/utils"

export function ShotButton({ shot, className }: { shot: Shot; className?: string }) {
  return (
    <Dialog>
      <figure className="min-w-0">
        <DialogTrigger asChild>
          <button
            type="button"
            className={cn(
              "group block w-full overflow-hidden rounded-lg border bg-muted outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
              className
            )}
            aria-label={`Enlarge: ${shot.caption}`}
          >
            <img src={shot.src} alt={shot.alt} loading="lazy" className="h-full w-full object-cover object-top" />
          </button>
        </DialogTrigger>
        <figcaption className="mt-2 text-xs text-muted-foreground">{shot.caption}</figcaption>
      </figure>
      <DialogContent>
        <DialogTitle className="sr-only">{shot.caption}</DialogTitle>
        <DialogDescription className="sr-only">{shot.alt}</DialogDescription>
        <img src={shot.src} alt={shot.alt} className="mx-auto h-auto max-h-[84vh] w-auto max-w-full rounded-md" />
      </DialogContent>
    </Dialog>
  )
}
