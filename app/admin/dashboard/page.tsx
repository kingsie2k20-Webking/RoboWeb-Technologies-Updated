"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<number>(1)
  const [editingId, setEditingId] = useState<string | null>(null)

  // Data States
  const [jobList, setJobList] = useState<any[]>([])
  const [upcomingList, setUpcomingList] = useState<any[]>([])
  const [pastList, setPastList] = useState<any[]>([])

  // Form States: Job Opening
  const [jobTitle, setJobTitle] = useState("")
  const [jobDept, setJobDept] = useState("")
  const [jobLocation, setJobLocation] = useState("")
  const [jobType, setJobType] = useState("")
  const [jobDesc, setJobDesc] = useState("")
  const [jobImage, setJobImage] = useState("")
  const [jobEmail, setJobEmail] = useState("")
  const [jobDate, setJobDate] = useState("")

  // Form States: Upcoming Hackathon
  const [upTitle, setUpTitle] = useState("")
  const [upDate, setUpDate] = useState("")
  const [upLocation, setUpLocation] = useState("")
  const [upDesc, setUpDesc] = useState("")
  const [upImage, setUpImage] = useState("")
  const [upRegType, setUpRegType] = useState<"url" | "email">("url")
  const [upRegisterUrl, setUpRegisterUrl] = useState("")
  const [upApplyEmail, setUpApplyEmail] = useState("")

  // Form States: Past Hackathon
  const [pastTitle, setPastTitle] = useState("")
  const [pastDate, setPastDate] = useState("")
  const [pastLocation, setPastLocation] = useState("")
  const [pastDesc, setPastDesc] = useState("")
  const [pastImages, setPastImages] = useState<string[]>([])

  // File input refs
  const jobFileRef = useRef<HTMLInputElement>(null)
  const upFileRef = useRef<HTMLInputElement>(null)
  const pastFileRef = useRef<HTMLInputElement>(null)

  // Fetch all data on load & trap back button to prevent logout
  useEffect(() => {
    fetchAllData()

    // Push a dummy state to history stack to disable/trap the back button
    window.history.pushState(null, "", window.location.href)

    const handlePopState = () => {
      // Re-push the current state immediately to block navigation/logout via back button
      window.history.pushState(null, "", window.location.href)
    }

    window.addEventListener("popstate", handlePopState)

    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [])

  const fetchAllData = () => {
    fetch("/api/jobs").then(res => res.json()).then(data => Array.isArray(data) && setJobList(data))
    fetch("/api/hackathons").then(res => res.json()).then(data => Array.isArray(data) && setUpcomingList(data))
    fetch("/api/past-hackathons").then(res => res.json()).then(data => Array.isArray(data) && setPastList(data))
  }

  const cancelEdit = () => {
    setEditingId(null)
    setJobTitle(""); setJobDept(""); setJobLocation(""); setJobType(""); setJobDesc(""); setJobImage(""); setJobEmail(""); setJobDate("")
    if (jobFileRef.current) jobFileRef.current.value = ""

    setUpTitle(""); setUpDate(""); setUpLocation(""); setUpDesc(""); setUpImage(""); setUpRegType("url"); setUpRegisterUrl(""); setUpApplyEmail("")
    if (upFileRef.current) upFileRef.current.value = ""

    setPastTitle(""); setPastDate(""); setPastLocation(""); setPastDesc(""); setPastImages([])
    if (pastFileRef.current) pastFileRef.current.value = ""
  }

  // Secure Logout Handler
  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("isAdminLoggedIn")
      document.cookie = "isAdminLoggedIn=; Max-Age=0; path=/;"
      router.push("/admin/login")
    }
  }

  // Helper to convert uploaded files to base64 strings
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, isMultiple: boolean = false) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    if (isMultiple) {
      const promises = Array.from(files).map(file => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result as string)
          reader.readAsDataURL(file)
        })
      })
      Promise.all(promises).then(base64Array => {
        setPastImages(prev => [...prev, ...base64Array])
      })
    } else {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (activeTab === 1) setJobImage(reader.result as string)
        if (activeTab === 2) setUpImage(reader.result as string)
      }
      reader.readAsDataURL(files[0])
    }
  }

  const handleRemovePastImage = (indexToRemove: number) => {
    setPastImages(prev => prev.filter((_, index) => index !== indexToRemove))
  }

  // 1. Save or Update Job
  const handleSaveJob = async (e: React.FormEvent) => {
    e.preventDefault()
    const defaultJobImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60"
    const finalJobImage = jobImage.trim() !== "" ? jobImage : defaultJobImage

    const url = editingId ? `/api/jobs/${editingId}` : "/api/jobs"
    const method = editingId ? "PUT" : "POST"

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: jobTitle, department: jobDept, location: jobLocation, type: jobType, description: jobDesc, imageUrl: finalJobImage, email: jobEmail, date: jobDate })
      })

      if (res.ok) {
        alert(editingId ? "Job updated successfully!" : "Job posted successfully!")
        cancelEdit()
        fetchAllData()
        setActiveTab(4)
      } else {
        const errorData = await res.json().catch(() => ({}))
        alert(`Failed to save job post: ${errorData.error || res.statusText}`)
      }
    } catch (err) {
      alert("Failed to save job post due to network error.")
    }
  }

  // 2. Save or Update Upcoming Hackathon
  const handleSaveUpcoming = async (e: React.FormEvent) => {
    e.preventDefault()
    const defaultUpImage = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=60"
    const finalUpImage = upImage && upImage.trim() !== "" ? upImage : defaultUpImage

    const finalRegisterUrl = upRegType === "url" 
      ? upRegisterUrl 
      : `mailto:${upApplyEmail}`

    const url = editingId ? `/api/hackathons/${editingId}` : "/api/hackathons"
    const method = editingId ? "PUT" : "POST"

    const payload = {
      title: upTitle, 
      date: upDate, 
      location: upLocation, 
      description: upDesc, 
      imageUrl: finalUpImage, 
      registerUrl: finalRegisterUrl,
    }

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })

      if (res.ok) {
        alert(editingId ? "Upcoming Hackathon updated!" : "Upcoming Hackathon posted!")
        cancelEdit()
        fetchAllData()
        setActiveTab(4)
      } else {
        const errorData = await res.json().catch(() => ({}))
        alert(`Failed to save upcoming hackathon: ${errorData.error || res.statusText}`)
      }
    } catch (err) {
      alert("Failed to save upcoming hackathon due to network error.")
    }
  }

  // 3. Save or Update Past Hackathon
  const handleSavePast = async (e: React.FormEvent) => {
    e.preventDefault()
    const url = editingId ? `/api/past-hackathons/${editingId}` : "/api/past-hackathons"
    const method = editingId ? "PUT" : "POST"

    const payload = {
      title: pastTitle, 
      date: pastDate, 
      location: pastLocation, 
      description: pastDesc, 
      images: pastImages, 
      winners: ""
    }

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })

      if (res.ok) {
        alert(editingId ? "Past Hackathon updated!" : "Past Hackathon published!")
        cancelEdit()
        fetchAllData()
        setActiveTab(4)
      } else {
        const errorData = await res.json().catch(() => ({}))
        alert(`Failed to save past hackathon: ${errorData.error || res.statusText}`)
      }
    } catch (err) {
      alert("Failed to save past hackathon due to network error.")
    }
  }

  // Deletion Handler
  const handleDelete = async (endpoint: string, id: string) => {
    if (confirm("Are you sure you want to remove this post?")) {
      const res = await fetch(`/api/${endpoint}/${id}`, { method: "DELETE" })
      if (res.ok) {
        alert("Deleted successfully!")
        fetchAllData()
      } else {
        alert("Failed to delete.")
      }
    }
  }

  const startEditJob = (job: any) => {
    setEditingId(job.id)
    setJobTitle(job.title || "")
    setJobDept(job.department || "")
    setJobLocation(job.location || "")
    setJobType(job.type || "")
    setJobDesc(job.description || "")
    setJobImage(job.imageUrl || job.image || "")
    setJobEmail(job.email || "")
    setJobDate(job.date || "")
    if (jobFileRef.current) jobFileRef.current.value = ""
    setActiveTab(1)
  }

  const startEditUpcoming = (item: any) => {
    setEditingId(item.id)
    setUpTitle(item.title || "")
    setUpDate(item.date || "")
    setUpLocation(item.location || "")
    setUpDesc(item.description || "")
    setUpImage(item.imageUrl || item.image || "")
    
    if (item.registerUrl && item.registerUrl.startsWith("mailto:")) {
      setUpRegType("email")
      setUpApplyEmail(item.registerUrl.replace("mailto:", ""))
      setUpRegisterUrl("")
    } else {
      setUpRegType("url")
      setUpRegisterUrl(item.registerUrl || "")
      setUpApplyEmail("")
    }

    if (upFileRef.current) upFileRef.current.value = ""
    setActiveTab(2)
  }

  const startEditPast = (item: any) => {
    setEditingId(item.id)
    setPastTitle(item.title || "")
    setPastDate(item.date || "")
    setPastLocation(item.location || "")
    setPastDesc(item.description || "")
    setPastImages(Array.isArray(item.images) ? item.images : [])
    if (pastFileRef.current) pastFileRef.current.value = ""
    setActiveTab(3)
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0f172a", color: "#f8fafc", padding: "2.5rem 1.5rem", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Header with Logout Button */}
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", borderBottom: "1px solid #334155", paddingBottom: "1rem" }}>
          <div>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#38bdf8" }}>RoboWeb Admin Control Panel</h1>
            <p style={{ color: "#94a3b8", marginTop: "0.25rem" }}>Create, Edit, and Remove database records with image uploads.</p>
          </div>
          <button onClick={handleLogout} style={{ padding: "0.6rem 1.25rem", backgroundColor: "#ef4444", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "600", cursor: "pointer", transition: "background 0.2s" }}>
            Logout
          </button>
        </header>

        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          <button onClick={() => { cancelEdit(); setActiveTab(1); }} style={tabStyle(activeTab === 1)}>1. Job Opening Post</button>
          <button onClick={() => { cancelEdit(); setActiveTab(2); }} style={tabStyle(activeTab === 2)}>2. Upcoming Hackathons</button>
          <button onClick={() => { cancelEdit(); setActiveTab(3); }} style={tabStyle(activeTab === 3)}>3. Past Hackathons</button>
          <button onClick={() => { cancelEdit(); setActiveTab(4); }} style={tabStyle(activeTab === 4)}>4. Manage Posts</button>
        </div>

        {/* Tab 1: Job Opening */}
        {activeTab === 1 && (
          <div style={cardStyle}>
            <h2 style={sectionTitle}>{editingId ? "✏️ Edit Job Opening" : "Post a New Job Opening"}</h2>
            <form onSubmit={handleSaveJob} style={formGrid}>
              <input type="text" placeholder="Job Title" value={jobTitle} onChange={e => setJobTitle(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="Department (e.g. Engineering)" value={jobDept} onChange={e => setJobDept(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="Location" value={jobLocation} onChange={e => setJobLocation(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="Type (e.g. Full-time)" value={jobType} onChange={e => setJobType(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="Contact Email" value={jobEmail} onChange={e => setJobEmail(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="Date Posted" value={jobDate} onChange={e => setJobDate(e.target.value)} required style={inputStyle} />
              
              <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.9rem", color: "#94a3b8" }}>Upload Job Banner Image:</label>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <input ref={jobFileRef} type="file" accept="image/*" onChange={e => handleFileUpload(e, false)} style={{ ...inputStyle, flex: 1 }} />
                  {jobImage && (
                    <button type="button" onClick={() => { setJobImage(""); if (jobFileRef.current) jobFileRef.current.value = ""; }} style={btnRemove}>
                      Remove Image
                    </button>
                  )}
                </div>
                {jobImage && <small style={{ color: "#38bdf8" }}>✓ Image selected / loaded</small>}
              </div>

              <textarea placeholder="Job Description" value={jobDesc} onChange={e => setJobDesc(e.target.value)} rows={3} required style={{ ...inputStyle, gridColumn: "span 2", resize: "vertical" }} />
              
              <div style={{ gridColumn: "span 2", display: "flex", gap: "1rem" }}>
                <button type="submit" style={btnPrimary}>{editingId ? "Update Job Post" : "Publish Job Post"}</button>
                {editingId && <button type="button" onClick={cancelEdit} style={btnCancel}>Cancel</button>}
              </div>
            </form>
          </div>
        )}

        {/* Tab 2: Upcoming Hackathons */}
        {activeTab === 2 && (
          <div style={cardStyle}>
            <h2 style={sectionTitle}>{editingId ? "✏️ Edit Upcoming Hackathon" : "Post an Upcoming Hackathon"}</h2>
            <form onSubmit={handleSaveUpcoming} style={formGrid}>
              <input type="text" placeholder="Hackathon Title" value={upTitle} onChange={e => setUpTitle(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="Date" value={upDate} onChange={e => setUpDate(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="Location" value={upLocation} onChange={e => setUpLocation(e.target.value)} required style={inputStyle} />
              
              <div style={{ gridColumn: "span 2", backgroundColor: "#0f172a", padding: "1rem", borderRadius: "8px", border: "1px solid #475569", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.9rem", color: "#38bdf8", fontWeight: "600" }}>Application Method:</label>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", cursor: "pointer" }}>
                    <input type="radio" name="upRegType" checked={upRegType === "url"} onChange={() => setUpRegType("url")} /> Register URL
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", cursor: "pointer" }}>
                    <input type="radio" name="upRegType" checked={upRegType === "email"} onChange={() => setUpRegType("email")} /> Apply via Mail
                  </label>
                </div>
                {upRegType === "url" ? (
                  <input type="text" placeholder="Register URL (e.g. https://lu.ma/...)" value={upRegisterUrl} onChange={e => setUpRegisterUrl(e.target.value)} required style={inputStyle} />
                ) : (
                  <input type="email" placeholder="Admin Contact Email for Applications" value={upApplyEmail} onChange={e => setUpApplyEmail(e.target.value)} required style={inputStyle} />
                )}
              </div>
              
              <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.9rem", color: "#94a3b8" }}>Upload Upcoming Hackathon Image:</label>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <input ref={upFileRef} type="file" accept="image/*" onChange={e => handleFileUpload(e, false)} style={{ ...inputStyle, flex: 1 }} />
                  {upImage && (
                    <button type="button" onClick={() => { setUpImage(""); if (upFileRef.current) upFileRef.current.value = ""; }} style={btnRemove}>
                      Remove Image
                    </button>
                  )}
                </div>
                {upImage && <small style={{ color: "#38bdf8" }}>✓ Image selected / loaded</small>}
              </div>

              <textarea placeholder="Description" value={upDesc} onChange={e => setUpDesc(e.target.value)} rows={3} required style={{ ...inputStyle, gridColumn: "span 2", resize: "vertical" }} />
              
              <div style={{ gridColumn: "span 2", display: "flex", gap: "1rem" }}>
                <button type="submit" style={btnPrimary}>{editingId ? "Update Hackathon" : "Publish Upcoming Hackathon"}</button>
                {editingId && <button type="button" onClick={cancelEdit} style={btnCancel}>Cancel</button>}
              </div>
            </form>
          </div>
        )}

        {/* Tab 3: Past Hackathons */}
        {activeTab === 3 && (
          <div style={cardStyle}>
            <h2 style={sectionTitle}>{editingId ? "✏️ Edit Past Hackathon" : "Post a Past Hackathon Showcase"}</h2>
            <form onSubmit={handleSavePast} style={formGrid}>
              <input type="text" placeholder="Event Title" value={pastTitle} onChange={e => setPastTitle(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="Date" value={pastDate} onChange={e => setPastDate(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="Location" value={pastLocation} onChange={e => setPastLocation(e.target.value)} required style={inputStyle} />
              
              <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <label style={{ fontSize: "0.9rem", color: "#38bdf8" }}>Upload Multiple Images for Slideshow (Select multiple photos):</label>
                
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <input ref={pastFileRef} type="file" accept="image/*" multiple onChange={e => handleFileUpload(e, true)} style={{ ...inputStyle, flex: 1 }} />
                  {pastImages.length > 0 && (
                    <button type="button" onClick={() => { setPastImages([]); if (pastFileRef.current) pastFileRef.current.value = ""; }} style={btnRemove}>
                      Clear All
                    </button>
                  )}
                </div>

                {pastImages.length > 0 && (
                  <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                    {pastImages.map((imgSrc, index) => (
                      <div key={index} style={{ position: "relative", width: "70px", height: "70px", borderRadius: "8px", overflow: "hidden", border: "1px solid #475569" }}>
                        <img src={imgSrc} alt={`Preview ${index}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <button
                          type="button"
                          onClick={() => handleRemovePastImage(index)}
                          style={{
                            position: "absolute",
                            top: "2px",
                            right: "2px",
                            backgroundColor: "rgba(239, 68, 68, 0.9)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "50%",
                            width: "20px",
                            height: "20px",
                            fontSize: "11px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          title="Remove this image"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>{pastImages.length} image(s) selected</span>
              </div>

              <textarea placeholder="Description" value={pastDesc} onChange={e => setPastDesc(e.target.value)} rows={3} required style={{ ...inputStyle, gridColumn: "span 2", resize: "vertical" }} />
              
              <div style={{ gridColumn: "span 2", display: "flex", gap: "1rem" }}>
                <button type="submit" style={btnPrimary}>{editingId ? "Update Past Hackathon" : "Publish Past Hackathon"}</button>
                {editingId && <button type="button" onClick={cancelEdit} style={btnCancel}>Cancel</button>}
              </div>
            </form>
          </div>
        )}

        {/* Tab 4: Manage Posts */}
        {activeTab === 4 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem", color: "#e2e8f0" }}>Manage All Database Posts</h2>
            
            <div style={manageSectionStyle}>
              <h3 style={subHeader}>Job Openings ({jobList.length})</h3>
              {jobList.length === 0 && <p style={{ color: "#64748b" }}>No jobs found.</p>}
              {jobList.map((job: any) => (
                <div key={job.id} style={listItemStyle}>
                  <span><strong>{job.title}</strong> — <small style={{ color: "#94a3b8" }}>{job.department}</small></span>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button onClick={() => startEditJob(job)} style={btnEdit}>Edit</button>
                    <button onClick={() => handleDelete("jobs", job.id)} style={btnDelete}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div style={manageSectionStyle}>
              <h3 style={subHeader}>Upcoming Hackathons ({upcomingList.length})</h3>
              {upcomingList.length === 0 && <p style={{ color: "#64748b" }}>No upcoming hackathons found.</p>}
              {upcomingList.map((item: any) => (
                <div key={item.id} style={listItemStyle}>
                  <span><strong>{item.title}</strong> — <small style={{ color: "#94a3b8" }}>{item.date}</small></span>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button onClick={() => startEditUpcoming(item)} style={btnEdit}>Edit</button>
                    <button onClick={() => handleDelete("hackathons", item.id)} style={btnDelete}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div style={manageSectionStyle}>
              <h3 style={subHeader}>Past Hackathons ({pastList.length})</h3>
              {pastList.length === 0 && <p style={{ color: "#64748b" }}>No past hackathons found.</p>}
              {pastList.map((item: any) => (
                <div key={item.id} style={listItemStyle}>
                  <span><strong>{item.title}</strong> — <small style={{ color: "#94a3b8" }}>{item.date}</small></span>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button onClick={() => startEditPast(item)} style={btnEdit}>Edit</button>
                    <button onClick={() => handleDelete("past-hackathons", item.id)} style={btnDelete}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

// Styling Constants
const tabStyle = (active: boolean) => ({ padding: "0.75rem 1.25rem", backgroundColor: active ? "#0284c7" : "#1e293b", color: "#fff", border: "1px solid #475569", borderRadius: "8px", cursor: "pointer", fontWeight: "600", transition: "all 0.2s" })
const cardStyle = { backgroundColor: "#1e293b", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }
const sectionTitle = { fontSize: "1.25rem", fontWeight: "600", marginBottom: "1.5rem", color: "#e2e8f0" }
const formGrid = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }
const inputStyle = { width: "100%", padding: "0.75rem", backgroundColor: "#0f172a", border: "1px solid #475569", borderRadius: "8px", color: "#f8fafc", outline: "none", fontSize: "0.95rem" }
const btnPrimary = { flex: 1, padding: "0.75rem", backgroundColor: "#0284c7", color: "#fff", fontWeight: "600", border: "none", borderRadius: "8px", cursor: "pointer" }
const btnCancel = { padding: "0.75rem 1.5rem", backgroundColor: "#475569", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }
const btnRemove = { padding: "0.75rem 1rem", backgroundColor: "#ef4444", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600", whiteSpace: "nowrap" }
const manageSectionStyle = { backgroundColor: "#1e293b", padding: "1.5rem", borderRadius: "10px", marginBottom: "1.5rem", border: "1px solid #334155" }
const subHeader = { fontSize: "1.1rem", color: "#38bdf8", marginBottom: "1rem" }
const listItemStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 0", borderBottom: "1px solid #334155" }
const btnEdit = { padding: "0.4rem 0.8rem", backgroundColor: "#3b82f6", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "500", fontSize: "0.85rem" }
const btnDelete = { padding: "0.4rem 0.8rem", backgroundColor: "#ef4444", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "500", fontSize: "0.85rem" }