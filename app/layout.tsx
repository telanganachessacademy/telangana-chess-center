import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Telangana Chess Centre - Professional Chess Training & Championships",
  description:
    "Telangana Chess Centre (TCC) offers premier FIDE-certified chess coaching, tournaments, grandmaster masterclasses, and online classes across Telangana and globally. Contact: telanganachesscentre@gmail.com | +91 9864646481",
  generator: "Telangana Chess Centre",
  keywords: [
    "Telangana Chess Centre",
    "Telangana Chess",
    "Chess Academy Hyderabad",
    "FIDE Rated Chess Coaches",
    "Online Chess Coaching",
    "Chess Tournaments Telangana",
    "Chess Training Hyderabad",
    "Grandmaster Masterclass"
  ],
  authors: [{ name: "Telangana Chess Centre" }],
  openGraph: {
    title: "Telangana Chess Centre - Premier Chess Institution",
    description: "FIDE Certified Chess Training, Grandmaster Faculty & Tournaments in Telangana.",
    images: ["/logo.png"],
    siteName: "Telangana Chess Centre",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsOrganization",
              name: "Telangana Chess Centre",
              alternateName: "Telangana Chess Academy",
              url: "https://www.telanganachesscentre.com",
              logo: "https://www.telanganachesscentre.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9864646481",
                contactType: "Customer Support",
                email: "telanganachesscentre@gmail.com",
                areaServed: "IN",
                availableLanguage: ["English", "Telugu", "Hindi"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kothapet",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                postalCode: "500035",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased bg-slate-50 text-slate-900`}>
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
