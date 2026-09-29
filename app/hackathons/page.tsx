"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// Helper component for 3-second auto-rotating image slideshow
function HackathonImageSlider({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!Array.isArray(images) || images.length <= 1) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [images])

  if (!Array.isArray(images) || images.length === 0) {
    return (
      <div style={{ width: "100%", height: "300px", backgroundColor: "#0f172a", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b" }}>
        No Image Available
      </div>
    )
  }

  return (
    <div style={{ width: "100%", height: "300px", borderRadius: "12px", overflow: "hidden", border: "1px solid #cbd5e1", backgroundColor: "#0f172a", position: "relative" }}>
      <img src={images[currentIndex]} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.5s ease-in-out" }} />
      {images.length > 1 && (
        <div style={{ position: "absolute", bottom: "10px", right: "10px", backgroundColor: "rgba(0,0,0,0.6)", padding: "2px 8px", borderRadius: "4px", fontSize: "0.75rem", color: "#38bdf8" }}>
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}

export default function PublicHackathonsPage() {
  const [pastList, setPastList] = useState<any[]>([])
  const [upcomingList, setUpcomingList] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch("/api/past-hackathons").then((res) => res.json()),
      fetch("/api/hackathons").then((res) => res.json()),
    ])
      .then(([pastData, upcomingData]) => {
        if (Array.isArray(pastData)) setPastList(pastData)
        if (Array.isArray(upcomingData)) setUpcomingList(upcomingData)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching hackathons data:", err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <SiteHeader />

      <main style={{ padding: "4rem 1.5rem", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        
        {/* ================= HERO HEADER WITH MATCHING COLOR GRADIENT ================= */}
        <header style={{ textAlign: "center", marginBottom: "4rem" }}>
          {/* Eyebrow Tag matching the training style */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 1rem", borderRadius: "9999px", backgroundColor: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.2)", marginBottom: "1.25rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.15em", color: "#38bdf8" }}>
              Innovating IT Services & Training
            </span>
          </div>

          {/* Main Title with Gradient Color Matching the Screenshot Style */}
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 3rem)", fontWeight: "900", lineHeight: "1.15", letterSpacing: "-0.03em", margin: "0" }}>
            <span style={{ background: "linear-gradient(to right, #60a5fa, #38bdf8, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Hackathons & Events
            </span>
          </h1>

          {/* Main Two-Line Stacked Title */}
          <h2 style={{ fontSize: "clamp(1.8rem, 6vw, 1.8rem)", fontWeight: "900", lineHeight: "1.15", letterSpacing: "-0.03em", margin: "0" }}>
            <span style={{ color: "#ffffff", display: "block" }}>Code. Build. Compete.</span>
          </h2>

          {/* Description Text */}
          <p style={{ color: "#94a3b8", fontSize: "1.1rem", marginTop: "1.5rem", maxWidth: "800px", marginLeft: "auto", marginRight: "auto", lineHeight: "1.7" }}>
            RoboWeb Technologies organizes industry-focused hackathons, coding competitions and innovation challenges that help students develop practical skills, teamwork and creative problem-solving abilities.
          </p>
        </header>

        {/* ================= SECTION 1: PAST HACKATHONS (Content Left, Image Right) ================= */}
        <section style={{ marginBottom: "5rem" }}>
          {loading ? (
            <p style={{ textAlign: "center", color: "#94a3b8" }}>Loading past events...</p>
          ) : pastList.length === 0 ? (
            <p style={{ textAlign: "center", color: "#94a3b8", fontStyle: "italic" }}>No past hackathons published yet.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
              {pastList.map((item) => {
                const imagesArray = Array.isArray(item.images) && item.images.length > 0 
                  ? item.images 
                  : (item.imageUrl || item.image ? [item.imageUrl || item.image] : [])

                return (
                  <div 
                    key={item.id} 
                    style={{ 
                      backgroundColor: "#ffffff", 
                      borderRadius: "20px", 
                      padding: "2.25rem", 
                      display: "grid", 
                      gridTemplateColumns: "1fr 1fr", 
                      gap: "2.5rem", 
                      alignItems: "center", 
                      boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.4)" 
                    }}
                  >
                    {/* Left: Content */}
                    <div>
                      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", fontSize: "0.85rem", color: "#000000", fontWeight: "700" }}>
                        <span>📅 {item.date}</span>
                        <span>📍 {item.location}</span>
                      </div>
                      <h2 style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "1rem", color: "#000000", letterSpacing: "-0.02em" }}>
                        {item.title}
                      </h2>
                      <p style={{ color: "#000000", lineHeight: "1.65", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                        {item.description}
                      </p>
                      
                      {item.winners && (
                        <div style={{ backgroundColor: "#f8fafc", padding: "1rem 1.25rem", borderRadius: "10px", border: "1px solid #e2e8f0", borderLeft: "4px solid #eab308" }}>
                          <span style={{ fontSize: "0.85rem", color: "#a16207", fontWeight: "700", display: "block", marginBottom: "0.25rem" }}>
                            🏆 Event Winner / Highlights
                          </span>
                          <span style={{ color: "#1e293b", fontSize: "0.95rem" }}>{item.winners}</span>
                        </div>
                      )}
                    </div>

                    {/* Right: Image Slider */}
                    <div>
                      <HackathonImageSlider images={imagesArray} title={item.title} />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>

        {/* ================= SECTION 2: UPCOMING HACKATHONS ================= */}
        <section style={{ borderTop: "1px solid #1e293b", paddingTop: "4rem" }}>
          <header style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 3rem)", fontWeight: "900", lineHeight: "1.15", letterSpacing: "-0.03em", margin: "0" }}>
            <span style={{ background: "linear-gradient(to right, #60a5fa, #38bdf8, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Upcoming Events
            </span>
          </h1>

          <p style={{ color: "#94a3b8", fontSize: "1.1rem", marginTop: "1.5rem", maxWidth: "800px", marginLeft: "auto", marginRight: "auto", lineHeight: "1.7" }}>
            Step into the arena, collaborate with top innovators, and turn your boldest ideas into working prototypes. Secure your spot in our upcoming challenges and kickstart your journey toward tech excellence.
          </p>
          <h2> </h2>
          </header>

          {loading ? (
            <p style={{ textAlign: "center", color: "#94a3b8" }}>Loading upcoming events...</p>
          ) : upcomingList.length === 0 ? (
            <p style={{ textAlign: "center", color: "#94a3b8", fontStyle: "italic", padding: "2rem 0" }}>
              No upcoming hackathons published right now. Check back soon!
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
              {upcomingList.map((item) => {
                const imgUrl = item.imageUrl || item.image
                const imagesArray = imgUrl ? [imgUrl] : []

                return (
                  <div 
                    key={item.id} 
                    style={{ 
                      backgroundColor: "#ffffff", 
                      borderRadius: "20px", 
                      padding: "2.25rem", 
                      display: "grid", 
                      gridTemplateColumns: "1fr 1fr", 
                      gap: "2.5rem", 
                      alignItems: "center", 
                      boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.4)" 
                    }}
                  >
                    {/* Left: Image */}
                    <div>
                      <HackathonImageSlider images={imagesArray} title={item.title} />
                    </div>

                    {/* Right: Content & Register Action */}
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                      <div>
                        <div style={{ display: "flex", gap: "1rem", fontSize: "0.85rem", color: "#000000", fontWeight: "700", marginBottom: "0.5rem" }}>
                          <span>📅 {item.date}</span>
                          <span>📍 {item.location}</span>
                        </div>
                        <h3 style={{ fontSize: "2rem", fontWeight: "800", color: "#000000", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
                          {item.title}
                        </h3>
                        <p style={{ color: "#000000", fontSize: "0.95rem", lineHeight: "1.65", marginBottom: "1.5rem" }}>
                          {item.description}
                        </p>
                      </div>

                      {/* Action Button */}
                      <div>
                        {item.registerUrl && item.registerUrl.startsWith("mailto:") ? (
                          <a href={item.registerUrl} style={{ display: "inline-block", textAlign: "center", padding: "0.85rem 1.75rem", backgroundColor: "#2563eb", color: "#fff", fontWeight: "700", borderRadius: "10px", textDecoration: "none" }}>
                            Apply via Email ({item.registerUrl.replace("mailto:", "")})
                          </a>
                        ) : item.registerUrl ? (
                          <a href={item.registerUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", textAlign: "center", padding: "0.85rem 1.75rem", backgroundColor: "#059669", color: "#fff", fontWeight: "700", borderRadius: "10px", textDecoration: "none" }}>
                            Register Now
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}