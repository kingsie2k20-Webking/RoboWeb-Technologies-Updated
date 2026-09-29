"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealVariant =
  | "fade-up" // default: slide up + fade
  | "zoom-float" // hero: fade + gentle zoom-in + subtle upward float
  | "slide-up" // staggered cards sliding up from the bottom
  | "slide-left" // timeline slide-in from the left
  | "slide-right" // grid card sliding in from the right
  | "zoom-fade" // badge blocks scaling up from 90%
  | "blur-up" // fade + upward blur-to-clear

const HIDDEN: Record<RevealVariant, string> = {
  "fade-up": "translate-y-8 opacity-0",
  "zoom-float": "translate-y-6 scale-95 opacity-0",
  "slide-up": "translate-y-12 opacity-0",
  "slide-left": "-translate-x-12 opacity-0",
  "slide-right": "translate-x-12 opacity-0",
  "zoom-fade": "scale-90 opacity-0",
  "blur-up": "translate-y-6 opacity-0 blur-[10px]",
}

const VISIBLE: Record<RevealVariant, string> = {
  "fade-up": "translate-y-0 opacity-100",
  "zoom-float": "translate-y-0 scale-100 opacity-100",
  "slide-up": "translate-y-0 opacity-100",
  "slide-left": "translate-x-0 opacity-100",
  "slide-right": "translate-x-0 opacity-100",
  "zoom-fade": "scale-100 opacity-100",
  "blur-up": "translate-y-0 opacity-100 blur-0",
}

interface RevealProps {
  children: ReactNode
  className?: string
  /** Stagger delay in milliseconds applied once the element enters the viewport. */
  delay?: number
  /** Animation style. Defaults to "fade-up". */
  variant?: RevealVariant
  /** Transition duration in milliseconds. Defaults to 700. */
  duration?: number
  /** Render as a different element (e.g. "li", "section"). Defaults to "div". */
  as?: ElementType
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
  duration = 700,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect users who prefer reduced motion by showing content immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={visible ? { transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` } : { transitionDuration: `${duration}ms` }}
      className={cn(
        "transition-all ease-out will-change-transform motion-reduce:transition-none",
        visible ? VISIBLE[variant] : HIDDEN[variant],
        className,
      )}
    >
      {children}
    </Tag>
  )
}
