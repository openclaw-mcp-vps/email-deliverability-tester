import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Email Deliverability Tester — Inbox or Spam?',
  description: 'Test if your emails reach the inbox or land in spam across Gmail, Outlook, Yahoo and more. Real-time deliverability reports and reputation scoring.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9008bb8b-c906-465f-b4a7-5e86595fe9e5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
