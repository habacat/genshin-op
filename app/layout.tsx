import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '复旦大学兴趣圈 | 原神 及其它',
  description: `复旦大学兴趣圈 | 原神 及其它`,
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
