import ThemeProvider from "@/components/ThemeProvider"
import "./globals.css"
import ThemeToggle from "@/components/ThemeToggle"

export const metadata = {
  title: "App Notes",
  description: "Next.js + Tailwind + API Symfony",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider>
          <header>
            <div id="logo">
              <span>Loc'Event</span> 
            </div>
            <div>
              <a href="#">Lien1</a>
              <a href="#">Lien2</a>
              <a href="#">Lien3</a>

              <ThemeToggle />
            </div>
          </header>
          <hr />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}