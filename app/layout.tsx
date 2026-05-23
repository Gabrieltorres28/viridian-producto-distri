import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});
const _geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Viridian Core | Software de gestion para distribuidoras",
  description: "Gestiona stock, clientes, caja, deuda y repartos desde una plataforma pensada para distribuidoras.",
  keywords: ["Viridian Core", "software para distribuidoras", "gestion de stock", "inventario", "deuda", "caja", "repartos", "pyme"],
  applicationName: "Viridian Core",
  authors: [{ name: "Viridian Core" }],
  creator: "Viridian Core",
  publisher: "Viridian Core",
  openGraph: {
    title: "Viridian Core | Software de gestion para distribuidoras",
    description: "Stock, clientes, caja, deuda y repartos en una plataforma pensada para distribuidoras.",
    siteName: "Viridian Core",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Viridian Core | Software de gestion para distribuidoras",
    description: "Stock, clientes, caja, deuda y repartos en una plataforma pensada para distribuidoras.",
  },
  icons: {
    icon: [
      {
        url: "/images/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/images/apple-icon.png",
    apple: "/images/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2f23',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
