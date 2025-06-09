import "./globals.css"
import Header from "@/components/Header"
import { Noto_Sans_Display, Oxanium } from "next/font/google"
import Main from "@/components/Main"
import AppProvider from "@/components/AppProvider"

const notoSansDisplay = Noto_Sans_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

const oxanium = Oxanium({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

export const metadata = {
  title: "App Notes",
  description: "Next.js + Tailwind + API Symfony",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={notoSansDisplay.className}>
        <AppProvider>
          <Header />
          <hr />
          <Main className={oxanium.className}>            
            {children}
          </Main>
          </AppProvider>
      </body>
    </html>
  )
}