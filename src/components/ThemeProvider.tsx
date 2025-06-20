"use client"

import { useEffect, useState } from "react"

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const newTheme = saved || (prefersDark ? "dark" : "light")
    setTheme(newTheme)
    document.body.dataset.theme = newTheme
  }, [])

  return <>{children}</>
}
