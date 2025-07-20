import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hemant Mandal - Digital Marketer | Social Media Marketing Professional",
  description:
    "Portfolio of Hemant Mandal, a Digital Marketer and Social Media Marketing Professional specializing in content creation and online brand building.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
