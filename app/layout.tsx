import './globals.css'

export const metadata = {
  title: 'Eos',
  description: 'Desktop and mobile productivity boost',
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
