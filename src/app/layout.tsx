import ThemeProvider from "@/components/ThemeProvider"
import "./globals.css"
import Header from "@/components/Header"

export const metadata = {
  title: "App Notes",
  description: "Next.js + Tailwind + API Symfony",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider>
          <Header/>
          <hr />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}