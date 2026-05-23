import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Rate Limit Tester — Test API Rate Limits Automatically',
  description: 'Automatically test REST API rate limits, document behavior, and get optimal request pattern recommendations. Built for API developers and integration engineers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="16c3bc06-2198-4bb0-84ef-835257902640"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
