import type { Metadata } from 'next'
import React from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import './../globals.css'
import { cn, TooltipProvider } from '@/components/shadcn'
import { ThemeProvider } from '@/components/theme-provider'
import { QueryProvider } from '@/query/query-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'zero-lib-react',
  description: 'zero-lib-react',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(geistSans.variable, geistMono.variable, 'antialiased')}
      >
        <QueryProvider>
          <main className='flex w-screen h-screen shrink-0'>
            <ThemeProvider
              attribute='class'
              defaultTheme='dark'
              enableSystem
              disableTransitionOnChange
            >
              <TooltipProvider>{children}</TooltipProvider>
            </ThemeProvider>
          </main>
        </QueryProvider>
      </body>
    </html>
  )
}
