import ThemeProvider from "@/components/ThemeProvider"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ThemeToggle from "@/components/ThemeToggle"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata = {
  title: "App Notes",
  description: "Next.js + Tailwind + API Symfony",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <ThemeToggle/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}