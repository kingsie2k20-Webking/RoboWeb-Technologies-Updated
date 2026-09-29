"use client"

import { useEffect, useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Briefcase, MapPin, Clock, Mail } from "lucide-react"

export default function CareersPage() {
  const [jobList, setJobList] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch live jobs from PostgreSQL database on load
  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setJobList(data)
        }
        setLoading(false)
      })
      .catch((err) => {
        console.error("Could not fetch jobs from database", err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">
            Work With Us
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Build the Future at <span className="text-blue-500">RoboWeb</span>
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Explore our open roles, work with leading-edge robotics and web engineering technologies, and help build world-class products.
          </p>
        </div>

        {/* Jobs Grid / Loading / Empty States */}
        {loading ? (
          <p className="text-center text-slate-400 py-12">Loading open positions...</p>
        ) : jobList.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-white/10">
            <p className="text-slate-400 italic">No job openings available right now. Please check back later!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobList.map((job) => {
              const targetEmail = job.email || "contact@robowebtechnologies.co.in"
              const mailSubject = encodeURIComponent(`Application for ${job.title} - [Your Name]`)
              const mailBody = encodeURIComponent(
                `Hi Hiring Team at RoboWeb Technologies,\n\nI am writing to express my interest in the ${job.title} role.\n\nPlease find my resume attached.\n\nBest regards,\n[Your Name]`
              )
              
              // Direct Gmail Web Compose URL to bypass OS mail protocol handlers
              const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${mailSubject}&body=${mailBody}`

              return (
                <div
                  key={job.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  {/* Banner Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                    <img
                      src={job.imageUrl}
                      alt={job.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium text-blue-400 backdrop-blur border border-white/10">
                      {job.type}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-2">
                      <Briefcase className="h-4 w-4 text-blue-400" />
                      <span>{job.department}</span>
                      <span>•</span>
                      <MapPin className="h-4 w-4 text-blue-400" />
                      <span>{job.location}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {job.title}
                    </h3>

                    <p className="text-sm text-slate-400 line-clamp-3 mb-6 flex-1">
                      {job.description}
                    </p>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {job.date || "Posted recently"}
                      </span>

                      <a
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-500"
                      >
                        <Mail className="h-4 w-4" />
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}