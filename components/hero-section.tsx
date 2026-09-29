import { ArrowRight, Sparkles } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

const METRICS = [
  { value: "15+", label: "Years Expertise" },
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Hands-on Training" },
]

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[130px]"
      />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <Reveal variant="zoom-float" className="flex justify-center">
          <span className="relative inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-300">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-blue-500/20 blur-md"
            />
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Innovating IT Services &amp; Training 
          </span>
        </Reveal>

        <Reveal variant="zoom-float" delay={100}>
          <h1 className="mx-auto mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Empowering Businesses &amp;{" "}
            <span className="bg-linear-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Future Innovators
            </span>
          </h1>
        </Reveal>

        <Reveal variant="zoom-float" delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-400 sm:text-lg">
            RoboWeb Technologies delivers professional Web Development, Software Solutions, Artificial
            Intelligence Automations, Robotics Education, Internship Programmes, and Industry-Oriented Training.
          </p>
        </Reveal>

        <Reveal variant="zoom-float" delay={300}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#services"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 gap-2 px-7 text-base bg-blue-600 text-white hover:bg-blue-500",
              )}
            >
              Explore Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#internships"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-12 px-7 text-base border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white",
              )}
            >
              Apply for Internship
            </a>
          </div>
        </Reveal>

        <Reveal variant="zoom-float" delay={400}>
          <div className="mx-auto mt-14 flex max-w-2xl flex-col items-stretch divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm sm:flex-row sm:divide-x sm:divide-y-0">
            {METRICS.map(({ value, label }) => (
              <div key={label} className="flex-1 px-6 py-5">
                <p className="text-2xl font-bold text-white sm:text-3xl">{value}</p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
