"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple secure check for demo / local usage
    if (username === "admin" && password === "Indrani#2026") {
      localStorage.setItem("isAdminAuthenticated", "true")
      router.push("/admin/dashboard")
    } else {
      setError("Invalid username or password!")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-100">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-slate-900 p-8 shadow-2xl">
        <h2 className="text-2xl font-bold tracking-tight text-white mb-6 text-center">
          Admin <span className="text-blue-400">Portal</span>
        </h2>
        {error && <p className="mb-4 text-sm text-red-400 bg-red-950/50 p-3 rounded border border-red-500/20">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2.5 font-medium text-white transition-colors hover:bg-blue-500"
          >
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  )
}