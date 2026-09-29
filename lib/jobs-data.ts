export interface JobPost {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
  imageUrl: string
  email: string
  date: string
}

export interface HackathonPost {
  id: string
  title: string
  date: string
  location: string
  description: string
  imageUrl: string
  registerUrl: string
}

// Initial mock data so the page isn't empty
export let jobs: JobPost[] = [
  {
    id: "1",
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Looking for a passionate Next.js & Node.js developer to build scalable web applications.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60",
    email: "careers@robowebtech.com",
    date: "2026-06-01",
  }
]

export let hackathons: HackathonPost[] = [
  {
    id: "1",
    title: "RoboWeb AI Hackathon 2026",
    date: "July 15-16, 2026",
    location: "Online",
    description: "Build innovative AI automation tools and win cash prizes worth $5,000!",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=60",
    registerUrl: "mailto:events@robowebtech.com?subject=Registration%20for%20AI%20Hackathon",
  }
]