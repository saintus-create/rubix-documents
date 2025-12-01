import type { Metadata } from "next"
import localFont from "next/font/local"
import { Providers } from "@/providers"
import { GoogleTagManager } from "@next/third-parties/google"

import { Settings } from "@/types/settings"
import { Footer } from "@/components/navigation/footer"
import { Navbar } from "@/components/navigation/navbar"

import "@/styles/globals.css"

// SF Pro Display for headings and display text
const sfProDisplay = localFont({
  src: [
    {
      path: "../public/fonts/SF-Pro-Display-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-display",
  display: "swap",
})

// SF Pro Compact for body text and UI elements
const sfProCompact = localFont({
  src: [
    {
      path: "../public/fonts/SF-Compact-Display-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Compact-Display-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Compact-Display-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Compact-Display-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Compact-Display-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-compact",
  display: "swap",
})

const baseUrl = Settings.metadataBase

export const metadata: Metadata = {
  title: Settings.title,
  metadataBase: new URL(baseUrl),
  description: Settings.description,
  keywords: Settings.keywords,
  openGraph: {
    type: Settings.openGraph.type,
    url: baseUrl,
    title: Settings.openGraph.title,
    description: Settings.openGraph.description,
    siteName: Settings.openGraph.siteName,
    images: Settings.openGraph.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  twitter: {
    card: Settings.twitter.card,
    title: Settings.twitter.title,
    description: Settings.twitter.description,
    site: Settings.twitter.site,
    images: Settings.twitter.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  publisher: Settings.name,
  alternates: {
    canonical: baseUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {Settings.gtmconnected && <GoogleTagManager gtmId={Settings.gtm} />}
      <body className={`${sfProDisplay.variable} ${sfProCompact.variable} font-compact antialiased`}>
        <Providers>
          <Navbar />
          <main className="h-auto px-5 sm:px-8">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
