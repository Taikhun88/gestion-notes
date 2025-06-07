"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const newTheme = saved || (prefersDark ? "dark" : "light")
    setTheme(newTheme)
    document.body.dataset.theme = newTheme
  }, [])

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light"
    setTheme(next)
    localStorage.setItem("theme", next)
    document.body.dataset.theme = next
  }

  return (
    <button
      onClick={toggle}
      className="px-4 py-2 rounded text-sm border"
    >
      Thème : {theme}
    </button>
  )
}