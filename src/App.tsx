import { Nav } from "@/components/Nav"
import { Hero } from "@/components/Hero"
import { Disciplines } from "@/components/Disciplines"
import { Projects } from "@/components/Projects"
import { AutomationWork } from "@/components/AutomationWork"
import { Stacks } from "@/components/Stacks"
import { Tools } from "@/components/Tools"
import { Associated } from "@/components/Associated"
import { Contact } from "@/components/Contact"

export default function App() {
  return (
    <>
      <a
        href="#what-i-do"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Disciplines />
        <Projects />
        <AutomationWork />
        <Stacks />
        <Tools />
        <Associated />
      </main>
      <Contact />
    </>
  )
}
