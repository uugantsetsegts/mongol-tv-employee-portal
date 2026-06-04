import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Монгол ТВ - Ажилтны нэгдсэн портал',
  description: 'Монгол ТВ-ийн ажилтнуудад зориулсан бүрэн цогц HR систем',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mn">
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  )
}
