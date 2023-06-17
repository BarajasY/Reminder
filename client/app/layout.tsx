import '../styles/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({weight:["800", "400"], subsets: ['latin'] })

export const metadata = {
  title: "Reminder",
  description: "A way to remind me of school tasks that i must do in my uni platform."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
