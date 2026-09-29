"use client"

import { useState } from "react"
import {
  GraduationCap,
  ShoppingCart,
  Rocket,
  HeartPulse,
  Factory,
  Briefcase,
  Building2,
  Cpu,
} from "lucide-react"
import { Reveal } from "@/components/reveal"

const INDUSTRIES = [
  { icon: GraduationCap, title: "Education", desc: "Learning management systems, student portals, online assessments and educational software solutions.", color: "from-blue-500 to-indigo-600", shadow: "rgba(59, 130, 246, 0.6)" },
  { icon: ShoppingCart, title: "Retail & E-Commerce", desc: "E-commerce platforms, inventory management, payment integration and customer engagement solutions.", color: "from-amber-400 to-orange-500", shadow: "rgba(245, 158, 11, 0.6)" },
  { icon: Rocket, title: "Startups & SMEs", desc: "Affordable, scalable software solutions that help startups and small businesses grow faster.", color: "from-indigo-500 to-purple-600", shadow: "rgba(99, 102, 241, 0.6)" },
  { icon: HeartPulse, title: "Healthcare", desc: "Healthcare management systems, appointment booking and secure patient information solutions.", color: "from-emerald-400 to-teal-600", shadow: "rgba(16, 185, 129, 0.6)" },
  { icon: Factory, title: "Manufacturing", desc: "Business automation, inventory tracking and operational management software.", color: "from-rose-500 to-red-600", shadow: "rgba(244, 63, 94, 0.6)" },
  { icon: Briefcase, title: "Professional Services", desc: "CRM systems, workflow automation and business management applications.", color: "from-cyan-400 to-blue-600", shadow: "rgba(6, 182, 212, 0.6)" },
  { icon: Building2, title: "Institutions", desc: "Digital transformation solutions for educational institutions and organizations.", color: "from-purple-500 to-fuchsia-600", shadow: "rgba(168, 85, 247, 0.6)" },
  { icon: Cpu, title: "IT & Technology", desc: "Custom software, AI automation and enterprise applications for technology-driven businesses.", color: "from-teal-400 to-cyan-600", shadow: "rgba(20, 184, 166, 0.6)" },
]

export function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const activeIndustry = INDUSTRIES[activeIndex]
  const ActiveIcon = activeIndustry.icon

  return (
    <section id="industries" className="relative border-t border-white/5 bg-slate-950 py-24 lg:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with Reveal Transition */}
        <Reveal variant="blur-up">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-white">Industries We Serve</p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-blue-400 sm:text-5xl">
              Software Solutions Across Multiple Industries
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white">
              Our expertise enables us to develop reliable, scalable and future-ready solutions tailored to the unique needs of businesses, educational institutions and organizations across diverse sectors..
            </p>
          </div>
        </Reveal>

        {/* Split Layout with Reveal Transition */}
        <Reveal variant="fade-up" delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Circular Orbit Floating Elements */}
            <div className="lg:col-span-6 flex items-center justify-center relative min-h-115 my-6">
              <div className="relative w-95 h-95 flex items-center justify-center">
                
                {/* Orbital Ring Guide Circles */}
                <div className="absolute inset-0 rounded-full border border-white/10 border-dashed animate-[spin_60s_linear_infinite] pointer-events-none" />
                <div className="absolute w-55 h-55 rounded-full border border-blue-500/20 pointer-events-none" />

                {/* Center Core Anchor */}
                <div className="absolute z-10 w-16 h-16 rounded-full bg-slate-900/90 border border-white/20 shadow-2xl flex items-center justify-center backdrop-blur-md">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br ${activeIndustry.color} text-white shadow-md transition-all duration-300`}>
                    <ActiveIcon className="h-4 w-4" />
                  </span>
                </div>

                {/* Floating Orbit Nodes positioned in a circle */}
                {INDUSTRIES.map(({ icon: Icon, title, color, shadow }, i) => {
                  const angle = (i * 360) / INDUSTRIES.length - 90
                  const radius = 175 // distance from center matching container bounds
                  const radian = (angle * Math.PI) / 180
                  const x = Math.round(radius * Math.cos(radian))
                  const y = Math.round(radius * Math.sin(radian))
                  const isActive = activeIndex === i

                  return (
                    <button
                      key={title}
                      onClick={() => setActiveIndex(i)}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`absolute z-30 flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br ${color} text-white transition-all duration-200 group cursor-pointer`}
                      style={{
                        left: `calc(50% + ${x}px - 28px)`,
                        top: `calc(50% + ${y}px - 28px)`,
                        boxShadow: isActive ? `0 0 30px ${shadow}` : "0 4px 15px rgba(0,0,0,0.4)",
                        outline: isActive ? "3px solid white" : "none",
                      }}
                      title={title}
                    >
                      <Icon className="h-6 w-6 transition-transform group-hover:scale-125" />
                      
                      {/* Tooltip label on hover */}
                      <span className="absolute -bottom-9 whitespace-nowrap bg-slate-900 border border-white/15 text-white text-xs font-bold px-3.5 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                        {title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right Side: Completely Boxless Content with Back Glow */}
            <div className="lg:col-span-6 relative lg:pl-6">
              <div className="relative p-6 sm:p-8 lg:p-10 overflow-hidden bg-transparent border-0 shadow-none">
                
                {/* Soft background ambient back-glow behind text */}
                <div 
                  className="absolute inset-0 opacity-25 blur-[100px] transition-all duration-500 pointer-events-none rounded-full"
                  style={{ backgroundColor: activeIndustry.shadow }}
                />

                <div className="relative z-10 flex flex-col items-start">
                  
                  {/* Logo & Title Side-by-Side */}
                  <div className="flex items-center gap-5 mb-6">
                    <span className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${activeIndustry.color} text-white shadow-xl shrink-0 scale-105`}>
                      <ActiveIcon className="h-8 w-8" />
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{activeIndustry.title}</h3>
                  </div>
                  
                  <p className="text-base sm:text-lg leading-relaxed text-slate-300 border-t border-white/10 pt-6 max-w-xl">
                    {activeIndustry.desc}
                  </p>

                  <div className="mt-10 pt-6 border-t border-white/10 w-full max-w-xl flex items-center justify-between text-xs sm:text-sm text-slate-400 font-medium">
                    <span>Custom Engineering & Integration</span>
                    <span className="text-blue-400 font-semibold tracking-wide">Ready to Deploy</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Reveal>

        {/* Mobile & Tablet Grid fallback */}
        <div className="lg:hidden mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {INDUSTRIES.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={title}
              onClick={() => setActiveIndex(i)}
              className={`flex items-start gap-4 p-5 rounded-2xl border transition-all bg-slate-900/60 ${
                activeIndex === i ? "border-blue-500 shadow-lg shadow-blue-500/20" : "border-white/10"
              }`}
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${color} text-white shadow-md`}>
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{title}</h3>
                <p className="text-xs text-slate-400 mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}