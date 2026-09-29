"use client"

import { useState } from "react"
import { Search, ClipboardList, Palette, Code2, TestTube2, Rocket, LifeBuoy } from "lucide-react"
import { Reveal } from "@/components/reveal"

const STEPS = [
  {
    icon: Search,
    step: "Step 01",
    title: "Discovery",
    desc: "Understanding your business goals, challenges and project requirements.",
    color: "from-purple-500 to-indigo-500",
    shadowColor: "rgba(168, 85, 247, 0.4)",
    borderColor: "#a855f7",
  },
  {
    icon: ClipboardList,
    step: "Step 02",
    title: "Planning",
    desc: "Preparing project architecture, timelines, technology stack and development roadmap.",
    color: "from-sky-400 to-blue-600",
    shadowColor: "rgba(56, 189, 248, 0.4)",
    borderColor: "#38bdf8",
  },
  {
    icon: Palette,
    step: "Step 03",
    title: "UI / UX Design",
    desc: "Designing intuitive, responsive and user-friendly interfaces for the best user experience.",
    color: "from-emerald-400 to-teal-600",
    shadowColor: "rgba(52, 211, 153, 0.4)",
    borderColor: "#34d399",
  },
  {
    icon: Code2,
    step: "Step 04",
    title: "Development",
    desc: "Building secure, scalable and high-performance software using modern technologies.",
    color: "from-amber-400 to-orange-500",
    shadowColor: "rgba(251, 191, 36, 0.4)",
    borderColor: "#fbbf24",
  },
  {
    icon: TestTube2,
    step: "Step 05",
    title: "Testing",
    desc: "Comprehensive testing to ensure quality, performance, security and reliability.",
    color: "from-orange-500 to-red-500",
    shadowColor: "rgba(249, 115, 22, 0.4)",
    borderColor: "#f97316",
  },
  {
    icon: Rocket,
    step: "Step 06",
    title: "Deployment",
    desc: "Launching your application smoothly with proper configuration and optimization.",
    color: "from-rose-500 to-pink-600",
    shadowColor: "rgba(244, 63, 94, 0.4)",
    borderColor: "#f43f5e",
  },
  {
    icon: LifeBuoy,
    step: "Step 07",
    title: "Support",
    desc: "Providing continuous maintenance, updates and technical support after deployment.",
    color: "from-fuchsia-500 to-purple-600",
    shadowColor: "rgba(217, 70, 239, 0.4)",
    borderColor: "#d946ef",
  },
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <section id="process" className="relative border-t border-white/5 bg-slate-950 py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with Reveal Transition */}
        <Reveal variant="blur-up">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-white">How We Work</p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-blue-400 sm:text-5xl">
              Our Software Development Process
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white">
              Every project follows a structured methodology to ensure transparency, quality, timely delivery and long-term success. Tap or hover over any step below to explore.
            </p>
          </div>
        </Reveal>

        {/* Desktop / Tablet Interactive Timeline Track with Reveal Transition */}
        <Reveal variant="fade-up" delay={200}>
          <div className="hidden lg:block relative py-20">
            
            {/* Central Connecting Bar */}
            <div className="absolute top-1/2 left-0 right-0 h-3 -translate-y-1/2 rounded-full bg-slate-900 border border-white/10 overflow-hidden flex">
              {STEPS.map((s, idx) => (
                <div 
                  key={idx} 
                  className={`flex-1 h-full bg-linear-to-r ${s.color} transition-all duration-500`}
                  style={{ opacity: activeStep === idx ? 1 : 0.3 }}
                />
              ))}
            </div>

            {/* Nodes Container */}
            <div className="relative flex justify-between items-center max-w-6xl mx-auto">
              {STEPS.map(({ icon: Icon, step, title, desc, color, shadowColor, borderColor }, i) => {
                const isTop = i % 2 === 0
                const isActive = activeStep === i

                return (
                  <div 
                    key={step} 
                    className="relative flex flex-col items-center group cursor-pointer"
                    onMouseEnter={() => setActiveStep(i)}
                    onClick={() => setActiveStep(i)}
                  >
                    {/* Top Content (for even index steps: 01, 03, 05, 07) */}
                    {isTop && (
                      <div className="absolute bottom-20 w-48 text-center transition-all duration-300 transform group-hover:-translate-y-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">{step}</span>
                        <h4 className="text-base font-bold text-white mt-0.5">{title}</h4>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">{desc}</p>
                      </div>
                    )}

                    {/* Dotted Vertical Connector Line */}
                    <div 
                      className={`absolute w-0.5 h-10 border-l border-dashed transition-all duration-300 ${
                        isTop ? "bottom-12" : "top-12"
                      }`}
                      style={{ borderColor: isActive ? borderColor : "rgba(255,255,255,0.2)" }}
                    />

                    {/* Circular Node Button (The glowing touch point) */}
                    <div 
                      className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br ${color} text-white transition-all duration-300 ${
                        isActive ? "scale-125 ring-4 ring-white/30" : "scale-100 opacity-80 hover:opacity-100"
                      }`}
                      style={{
                        boxShadow: isActive ? `0 0 25px ${shadowColor}` : "0 4px 10px rgba(0,0,0,0.3)"
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Bottom Content (for odd index steps: 02, 04, 06) */}
                    {!isTop && (
                      <div className="absolute top-20 w-48 text-center transition-all duration-300 transform group-hover:translate-y-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">{step}</span>
                        <h4 className="text-base font-bold text-white mt-0.5">{title}</h4>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">{desc}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>

        {/* Mobile / Tablet Vertical Timeline View with Reveal Transition */}
        <Reveal variant="fade-up" delay={200}>
          <div className="lg:hidden mt-8 space-y-4">
            {STEPS.map(({ icon: Icon, step, title, desc, color, shadowColor }, i) => (
              <div 
                key={step}
                onClick={() => setActiveStep(i)}
                className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 bg-slate-900/60 ${
                  activeStep === i ? "border-blue-500/60 shadow-lg" : "border-white/10"
                }`}
                style={{ boxShadow: activeStep === i ? `0 0 20px ${shadowColor}` : "none" }}
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${color} text-white shadow-md`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-400">{step}</span>
                    <span className="text-slate-600">•</span>
                    <h4 className="text-base font-bold text-white">{title}</h4>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}