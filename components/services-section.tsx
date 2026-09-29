import { Bot, Code, Cpu, GraduationCap, Smartphone, Wrench } from "lucide-react"
import { Reveal } from "@/components/reveal"

const SERVICES = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Responsive, high-performance websites and web apps built with modern, scalable frameworks.",
  },
  {
    icon: Wrench,
    title: "Software Solutions",
    desc: "Custom enterprise software engineered to streamline operations and drive measurable growth.",
  },
  {
    icon: Cpu,
    title: "AI Automations",
    desc: "Intelligent automation and AI workflows that reduce manual effort and unlock efficiency.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications delivering seamless experiences on iOS and Android.",
  },
  {
    icon: GraduationCap,
    title: "Professional Training",
    desc: "Industry-oriented programmes that equip learners with practical, job-ready technical skills.",
  },
  {
    icon: Bot,
    title: "Robotics",
    desc: "Hands-on robotics education and internship programmes built around real-world projects.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-white/5 bg-slate-900/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">What We Offer</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Software &amp; IT Services
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              key={title}
              variant={i % 2 === 0 ? "slide-right" : "slide-left"}
              delay={(i % 3) * 90}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 p-7 transition-all hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-950/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/15 text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
