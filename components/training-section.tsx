import { 
  Code2, 
  Terminal, 
  Cpu, 
  BrainCircuit, 
  BarChart3, 
  Palette, 
  Bot, 
  GraduationCap, 
  ArrowRight, 
  UserPlus, 
  BookOpen, 
  Laptop, 
  FolderGit2, 
  Briefcase, 
  Award, 
  Users, 
  Trophy 
} from "lucide-react"
import { Reveal } from "@/components/reveal"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SOFTWARE_TRACK = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Learn HTML, CSS, JavaScript, React, Next.js and modern web technologies through real-world projects.",
    tags: ["React", "Next.js", "Tailwind"],
    color: "hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]",
    iconBg: "bg-cyan-500/15 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white",
  },
  {
    icon: Terminal,
    title: "Python Programming",
    desc: "Master Python fundamentals, automation, APIs and application development with hands-on coding.",
    tags: ["Automation", "APIs", "Scripting"],
    color: "hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]",
    iconBg: "bg-blue-600/15 text-blue-400 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    icon: Cpu,
    title: "Java Full Stack",
    desc: "Build enterprise applications using Java, Spring Boot, databases and frontend technologies.",
    tags: ["Spring Boot", "SQL", "Full Stack"],
    color: "hover:border-indigo-400 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]",
    iconBg: "bg-indigo-500/15 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    desc: "Explore Machine Learning, Generative AI, Prompt Engineering and intelligent automation solutions.",
    tags: ["GenAI", "Machine Learning", "Prompting"],
    color: "hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]",
    iconBg: "bg-purple-500/15 text-purple-400 group-hover:bg-purple-500 group-hover:text-white",
  },
]

const HARDWARE_TRACK = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Learn Excel, SQL, Power BI and data visualization techniques for business decision making.",
    tags: ["Power BI", "SQL", "Excel"],
    color: "hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]",
    iconBg: "bg-emerald-500/15 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Design attractive, responsive and user-friendly digital experiences using modern design principles.",
    tags: ["Figma", "Wireframing", "UI Prototyping"],
    color: "hover:border-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]",
    iconBg: "bg-pink-500/15 text-pink-400 group-hover:bg-pink-500 group-hover:text-white",
  },
  {
    icon: Bot,
    title: "Robotics",
    desc: "Build robotics projects using Arduino, IoT, sensors and automation technologies through practical learning.",
    tags: ["Arduino", "IoT", "Hardware"],
    color: "hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]",
    iconBg: "bg-amber-500/15 text-amber-400 group-hover:bg-amber-500 group-hover:text-white",
  },
  {
    icon: GraduationCap,
    title: "Internship Programmes",
    desc: "Gain real-time project experience, mentorship and industry exposure through structured internships.",
    tags: ["Live Projects", "Mentorship", "Experience"],
    color: "hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]",
    iconBg: "bg-blue-500/15 text-blue-400 group-hover:bg-blue-600 group-hover:text-white",
  },
]

const JOURNEY_STEPS = [
  { step: "01", icon: UserPlus, title: "Enroll" },
  { step: "02", icon: BookOpen, title: "Learn Concepts" },
  { step: "03", icon: Laptop, title: "Hands-on Practice" },
  { step: "04", icon: FolderGit2, title: "Mini & Major Projects" },
  { step: "05", icon: Briefcase, title: "Interview Preparation" },
  { step: "06", icon: Award, title: "Certification" },
  { step: "07", icon: Users, title: "Career Support" },
]

export function TrainingSection() {
  const companyEmail = "contact@robowebtechnologies.co.in"

  // Direct Gmail web compose link for Placement Training enrollment
  const placementGmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodeURIComponent(
    `Inquiry & Enrollment for Placement Training`
  )}&body=${encodeURIComponent(
    `Hello RoboWeb Technologies Team,\n\nI am interested in enrolling for the Placement Training program.\n\nPlease find my details below:\nName:\nPhone:\nCollege / Qualification:\n\nLooking forward to hearing from you.\n\nBest regards,`
  )}`

  return (
    <section id="training" className="relative overflow-hidden border-t border-white/5 py-24 lg:py-32">
      
      {/* Background Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 h-125 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Hero Intro Block */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="zoom-float">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">Professional Training</p>
          </Reveal>
          
          <Reveal variant="zoom-float" delay={100}>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Learn. Build. Innovate.{" "}
              <span className="bg-linear-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Grow Your Career.
              </span>
            </h2>
          </Reveal>

          <Reveal variant="zoom-float" delay={200}>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              RoboWeb Technologies offers industry-oriented professional training programmes designed to equip students, graduates and working professionals with practical skills, real-world project experience and the confidence to succeed in today's competitive IT industry.
            </p>
          </Reveal>

          <Reveal variant="zoom-float" delay={300}>
            <div className="mt-8 flex justify-center">
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 gap-2 px-8 text-base bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/25",
                )}
              >
                Contact Us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Part 2: Training Categories / Course Tracks */}
        <div className="mt-10">
          <div className="mx-auto max-w-5xl text-center mb-16">
            <h3 className="mt-2 text-5xl font-bold tracking-tight text-white sm:text-4xl">
              Industry-Oriented Courses Designed for Future Careers
            </h3>
          </div>

          {/* Software & Core Tech Track */}
          <div className="mb-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SOFTWARE_TRACK.map(({ icon: Icon, title, desc, tags, color, iconBg }, i) => (
                <Reveal
                  key={title}
                  variant="slide-up"
                  delay={100 + i * 100}
                  className={`group rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition-none hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between ${color}`}
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${iconBg}`}>
                        <Icon className="h-6 w-6" />
                      </span>
                      <h5 className="text-base font-semibold text-white">{title}</h5>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400">{desc}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Hardware, Design & Internship Track */}
          <div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {HARDWARE_TRACK.map(({ icon: Icon, title, desc, tags, color, iconBg }, i) => (
                <Reveal
                  key={title}
                  variant="slide-up"
                  delay={500 + i * 100}
                  className={`group rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition-none hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between ${color}`}
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${iconBg}`}>
                        <Icon className="h-6 w-6" />
                      </span>
                      <h5 className="text-base font-semibold text-white">{title}</h5>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400">{desc}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>

        {/* Part 2.5: Two New Large Feature Boxes (Hackathons & Placement Training) */}
        <Reveal variant="fade-up" delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            
            {/* Box 1: Hackathons Training */}
            <div className="bg-linear-to-br from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-inner">
                  <Trophy className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  Hackathons Training
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Participate in high-intensity coding challenges, prototype building events, and hackathons designed to test problem-solving skills under tight deadlines. Build production-ready solutions and showcase innovations to expert panels.
                </p>
              </div>
              <div className="pt-6 mt-8 border-t border-slate-800 flex items-center justify-between relative z-10">
                <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Competitive Engineering</span>
                <a 
                  href="/hackathons" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl transition shadow-md"
                >
                  Explore Hackathons <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Box 2: Placement Training (Direct Gmail Link) */}
            <div className="bg-linear-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-inner">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  Placement Training
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Bridging the gap between academic learning and industry expectations. Our curriculum is built by enterprise veterans with experience at top IT firms like TCS, delivering guaranteed hands-on expertise, code reviews, and career guidance.
                </p>
              </div>
              <div className="pt-6 mt-8 border-t border-slate-800 flex items-center justify-between relative z-10">
                <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">Industry Recognized</span>
                <a 
                  href={placementGmailLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl transition shadow-md"
                >
                  Enroll Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Part 3: Learning Methodology / Ascending Staircase */}
        <div className="mt-28 rounded-3xl border border-white/10 bg-slate-900/40 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="mx-auto max-w-2xl text-center mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Learning Methodology</p>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-blue-400 sm:text-4xl">Your Learning Journey</h3>
            <p className="mt-3 text-sm text-white">
              Our structured training approach ensures every learner gains practical skills through project-based learning.
            </p>
          </div>

          {/* Ascending Staircase */}
          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-7 items-end pt-20">
            {JOURNEY_STEPS.map(({ step, icon: Icon, title }, i) => {
              const heightClasses = [
                "h-30", // Step 01
                "h-40", // Step 02
                "h-50", // Step 03
                "h-60", // Step 04
                "h-70", // Step 05
                "h-80", // Step 06
                "h-90"  // Step 07
              ][i]

              return (
                <Reveal
                  key={step}
                  variant="slide-up"
                  delay={100 + i * 80}
                  className={`group relative rounded-2xl border border-white/10 bg-slate-900/90 p-5 transition-none hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] flex flex-col justify-between ${heightClasses}`}
                >
                  <div className="absolute -top-10 left-4 px-2.5 py-0.5 rounded-full bg-blue-600 text-[10px] font-bold text-white tracking-widest font-mono shadow-md">
                    STEP {step}
                  </div>

                  <div className="py-2 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors mb-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-sm font-bold text-white tracking-tight">{title}</h4>
                  </div>
                  
                  <div className="mt-4 h-1 w-full rounded-full bg-white/5 group-hover:bg-cyan-400 transition-colors"></div>
                </Reveal>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}