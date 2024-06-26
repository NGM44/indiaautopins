import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'India Auto Pins | High-Quality Fasteners & Auto Components Manufacturer',
  description: 'India Auto Pins - ISO 9001-2015 certified manufacturer of high-tensile fasteners, auto parts, and precision components. Serving valve, auto, and machinery industries since 1978.',
  keywords: ['fasteners', 'auto parts', 'machine components', 'ASTM fasteners', 'stainless steel', 'high tensile', 'precision pins', 'Hubli', 'Karnataka'],
  authors: [{ name: 'India Auto Pins' }],
  creator: 'India Auto Pins',
  publisher: 'India Auto Pins',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'India Auto Pins | Leading Fastener Manufacturer in India',
    description: 'Established in 1978, India Auto Pins specializes in high-quality fasteners, auto parts, and precision components for valve, automotive, and machinery industries.',
    url: 'https://www.indiaautopins.com/',
    siteName: 'India Auto Pins',
    images: [
      {
        url: 'https://www.indiaautopins.com/company-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'India Auto Pins | Premium Fasteners & Auto Parts',
    description: 'ISO 9001-2015 certified manufacturer of high-tensile fasteners, auto components, and precision parts. Serving industries since 1978.',
    images: ['https://www.indiaautopins.com/company-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.indiaautopins.com/',
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Hubli',
    'geo.position': '15.3647;75.1240',
    'ICBM': '15.3647, 75.1240',
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
