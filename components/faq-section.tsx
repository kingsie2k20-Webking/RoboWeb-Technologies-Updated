"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Reveal } from "@/components/reveal"

const FAQS = [
  {
    q: "What software development services do you offer?",
    a: "We offer end-to-end software development including custom web applications, enterprise software, mobile apps, AI automation, API integrations and ongoing maintenance tailored to your business needs.",
  },
  {
    q: "Do you develop custom software for businesses?",
    a: "Yes. We design and build fully custom software from the ground up, engineered around your specific workflows, goals and scalability requirements.",
  },
  {
    q: "Can RoboWeb Technologies redesign my existing website?",
    a: "Absolutely. We modernize existing websites with improved design, performance, responsiveness and security while preserving your brand identity.",
  },
  {
    q: "Do you provide AI Automation solutions?",
    a: "Yes. We build intelligent automation and AI-driven workflows that reduce manual effort, streamline operations and improve overall efficiency.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Every project we deliver is fully responsive and optimized to provide a seamless experience across mobile, tablet and desktop devices.",
  },
  {
    q: "Do you provide software maintenance after project completion?",
    a: "Yes. We offer continuous maintenance, updates, monitoring and technical support to keep your software secure and running smoothly.",
  },
  {
    q: "How long does a software project usually take?",
    a: "Timelines vary by scope and complexity. After the discovery and planning phase we provide a clear, realistic delivery roadmap with defined milestones.",
  },
  {
    q: "Can you integrate payment gateways and third-party APIs?",
    a: "Yes. We integrate secure payment gateways, third-party services and external APIs to extend the functionality of your application.",
  },
  {
    q: "Which industries do you work with?",
    a: "We work across diverse sectors including education, retail and e-commerce, healthcare, manufacturing, startups, professional services, institutions and IT.",
  },
  {
    q: "How can I get a quotation for my project?",
    a: "Simply reach out through our contact section with your requirements. We will review your needs and share a detailed, customized quotation.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-white/5 bg-slate-900/30 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">Software Services FAQ</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-400">
            Find answers to common questions about our software development, AI automation solutions and technology
            services.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <Reveal
                key={q}
                variant="blur-up"
                delay={i * 60}
                duration={600}
                className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/50 transition-colors hover:border-blue-500/30"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-base font-medium text-white">{q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-blue-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{a}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
