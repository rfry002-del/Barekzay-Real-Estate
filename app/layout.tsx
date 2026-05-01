import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Barekzay Real Estate | Buy. Sell. Invest. Succeed.',
  description: 'Trusted real estate guidance for buying, selling, renting, and investing in Kabul and surrounding areas. Over 20 years of experience in the Afghan real estate market.',
  keywords: 'real estate, Kabul, Afghanistan, property, buying, selling, investment, Barekzay',
  authors: [{ name: 'Barekzay Real Estate' }],
  openGraph: {
    title: 'Barekzay Real Estate | Buy. Sell. Invest. Succeed.',
    description: 'Trusted real estate guidance for buying, selling, renting, and investing in Kabul and surrounding areas.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
