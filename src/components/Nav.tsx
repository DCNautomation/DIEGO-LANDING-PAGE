import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { href: "#what-i-do", label: "What I do" },
  { href: "#projects", label: "Projects" },
  { href: "#tools", label: "Tools" },
  { href: "#contact", label: "Contact" },
]

function getInitialDark() {
  try {
    const saved = localStorage.getItem("theme")
    if (saved) return saved === "dark"
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

export function Nav() {
  const [dark, setDark] = useState(getInitialDark)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    try {
      localStorage.setItem("theme", dark ? "dark" : "light")
    } catch {
      /* storage unavailable */
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">DN</span>
          <span className="text-sm font-medium">Diego Nodado</span>
        </a>
        <nav className="flex items-center gap-1" aria-label="Main">
          {links.map((l) => (
            <Button key={l.href} variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
              <a href={l.href}>{l.label}</a>
            </Button>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDark((d) => !d)}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? <Sun /> : <Moon />}
          </Button>
          <Button size="sm" asChild className="ml-1">
            <a href="#contact">Get in touch</a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
