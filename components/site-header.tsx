"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Training", href: "/#training" },
  { label: "Internships", href: "/#internships" },
  { label: "Hackathons & Events", href: "/hackathons" },
  { label: "Careers", href: "/careers" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white shadow-xs">
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        
        {/* Full Logo Container - Flushed to the left corner */}
        <a href="#home" className="flex shrink-0 items-center -ml-2 sm:-ml-4">
          <div className="relative h-15 w-32 sm:w-52 flex items-center">
            <Image 
              src="/logo.png" 
              alt="RoboWeb Technologies Logo" 
              fill 
              className="object-contain object-left scale-105"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-slate-900 transition-colors hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <a
            href="/#contact"
            className={cn(buttonVariants({ size: "lg" }), "bg-blue-600 text-white hover:bg-blue-500 shadow-sm")}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {open && (
        <div className="border-t border-slate-200 bg-white shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-2 w-full bg-blue-600 text-white hover:bg-blue-500",
              )}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

