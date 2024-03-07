import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import { Header } from '@/components/Header'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '600', '800'],
})

export const metadata: Metadata = {
  title: 'Countries Information',
  description: 'See information about all the countries in the world.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Header />
        <div className="m-auto max-w-[1440px] px-5 pb-5 pt-7 lg:pt-14">
          {children}
        </div>
      </body>
    </html>
  )
}
