import { Building2, Cpu, GraduationCap, Target, Eye, ShieldCheck, Zap, Award, Users } from "lucide-react"
import { Reveal } from "@/components/reveal"

const PILLARS = [
  {
    icon: Building2,
    title: "Enterprise Experience",
    desc: "Founded by a TCS veteran, we bring enterprise-grade standards, disciplined delivery, and proven best practices to every engagement.",
  },
  {
    icon: Cpu,
    title: "Modern Technologies",
    desc: "We build on future-ready web, AI, and software frameworks — ensuring solutions that stay relevant, secure, and scalable.",
  },
  {
    icon: GraduationCap,
    title: "Industry-Oriented Training",
    desc: "Students and interns gain real-world project experience, mentored by professionals to become truly industry-ready.",
  },
]

const CORE_VALUES = [
  {
    icon: Zap,
    title: "Innovation",
    desc: "We embrace modern technologies to deliver smart and future-ready solutions.",
    glowColor: "hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.7)]",
    iconBg: "bg-cyan-500/15 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We build long-term relationships through honesty, transparency and trust.",
    glowColor: "hover:border-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]",
    iconBg: "bg-blue-600/15 text-blue-400 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    icon: Award,
    title: "Quality",
    desc: "Every project is developed with high standards of quality and reliability.",
    glowColor: "hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.7)]",
    iconBg: "bg-emerald-500/15 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white",
  },
  {
    icon: Users,
    title: "Customer Success",
    desc: "Our success is measured by the success of our students and clients.",
    glowColor: "hover:border-amber-400 hover:shadow-[0_0_35px_rgba(245,158,11,0.7)]",
    iconBg: "bg-amber-500/15 text-amber-400 group-hover:bg-amber-500 group-hover:text-white",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/5 py-20 lg:py-28">
      
      {/* Ambient background blur orb matching Hero section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Who We Are</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-blue-400 sm:text-5xl">
            About RoboWeb Technologies
          </h2>
        </div>

        {/* Narrative Intro Story */}
        <Reveal variant="slide-up" delay={100} className="mx-auto mt-10 max-w-6xl text-center">
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg text-center">
            RoboWeb Technologies is a technology startup based in Madurai, Tamil Nadu, dedicated to delivering innovative software solutions, Artificial Intelligence automations, professional training, internship programs and robotics education. Founded by an IT professional with experience at Tata Consultancy Services (TCS), RoboWeb Technologies combines enterprise software development practices with practical learning to help businesses embrace digital transformation and prepare students for successful IT careers. We believe technology should not only solve business challenges but also create opportunities for learning, innovation and career growth.
          </p>
        </Reveal>

        {/* 3 Enterprise Pillars Grid (Instantaneous touch glow) */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              key={title}
              variant="slide-up"
              delay={200 + i * 140}
              className="group rounded-2xl border border-white/10 bg-slate-900/50 p-8 transition-none hover:-translate-y-1 hover:border-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] flex flex-col justify-between backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/15 text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Vision & Mission Split Layout with Glowing Center Divider */}
        <div className="relative mt-16 py-8 lg:py-12">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-linear-to-b from-transparent via-blue-500/60 to-transparent shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Vision (Left Side) */}
            <Reveal variant="slide-up" delay={500} className="text-left lg:pr-8">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
                  <Eye className="h-6 w-6" />
                </span>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                To become one of India's trusted technology companies by delivering innovative software solutions while creating industry-ready professionals through practical learning and innovation.
              </p>
            </Reveal>

            {/* Mission (Right Side) */}
            <Reveal variant="slide-up" delay={600} className="text-left lg:pl-8">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <Target className="h-6 w-6" />
                </span>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                To provide high-quality Web & App Development, Artificial Intelligence solutions, internship programs, professional training and robotics education that empower businesses and transform careers.
              </p>
            </Reveal>

          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Our Core Values</h3>
            <p className="mt-2 text-sm text-slate-400">The foundational principles that drive our engineering and mentoring culture.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map(({ icon: Icon, title, desc, glowColor, iconBg }, i) => (
              <Reveal
                key={title}
                variant="slide-up"
                delay={700 + i * 100}
                className={`group rounded-2xl border border-white/10 bg-slate-900/50 p-6 text-center transition-none hover:-translate-y-1 backdrop-blur-sm ${glowColor}`}
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${iconBg}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h4 className="text-base font-semibold text-white">{title}</h4>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-400 text-center">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}