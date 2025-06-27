import type { Metadata } from "next";
import localFont from 'next/font/local'

import "./globals.css";
// import Navbar from "@/components/common/navbar";
import RootProviders from "@/components/provider/theme";
import { ScrollTop } from "@/components/custom/scroll-top";

const WDLXLLubrifontTCRegular = localFont({
  src: '../../public/fonts/WDXLLubrifontTC-Regular.ttf',
  weight: '200',
  style: 'bold',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yashksaini.systems'),
  title: {
    default: "Yash K. Saini - Full-Stack Developer",
    template: "%s | Yash K. Saini"
  },
  description: "Full-Stack Developer passionate about building innovative open source projects, learning Rust, and sharing knowledge with the developer community. Specializing in modern web technologies and system programming.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Rust",
    "Open Source",
    "Web Development",
    "Software Engineer",
    "Portfolio",
    "Yash Saini"
  ],
  authors: [{ name: "Yash K. Saini", url: "https://yashksaini.systems" }],
  creator: "Yash K. Saini",
  publisher: "Yash K. Saini",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashksaini.systems",
    siteName: "Yash K. Saini",
    title: "Yash K. Saini - Full-Stack Developer",
    description: "Full-Stack Developer passionate about building innovative open source projects, learning Rust, and sharing knowledge with the developer community.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yash K. Saini - Full-Stack Developer Portfolio",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 1200,
        height: 1200,
        alt: "Yash K. Saini - Full-Stack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yash_k_saini", // Replace with your Twitter handle
    creator: "@yash_k_saini", // Replace with your Twitter handle
    title: "Yash K. Saini - Full-Stack Developer",
    description: "Full-Stack Developer passionate about building innovative open source projects, learning Rust, and sharing knowledge with the developer community.",
    images: [
      {
        url: "/og-image.png",
        alt: "Yash K. Saini - Full-Stack Developer Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://yashksaini.systems",
    // languages: {
    //   'en-US': 'https://yashksaini.systems',
    //   'es-ES': 'https://yashksaini.systems/es',
    // },
  },
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json", // Add if you have a web manifest
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Yash K. Saini",
    statusBarStyle: "default",
  },
  applicationName: "Yash K. Saini Portfolio",
  generator: "Next.js",
  other: {
    "msapplication-TileColor": "#2b5797",
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${WDLXLLubrifontTCRegular.className} antialiased`}
      >
        <main className="mx-auto px-10 py-4 min-h-screen selection:text-violet-500 selection:bg-violet-800/20">
        <RootProviders>
        {/* <Navbar /> */}
        <div className="max-w-4xl mx-auto md:px-10 px-4 py-4">
          {children}
        </div>
        </RootProviders>
        <ScrollTop />
        </main>
      </body>
    </html>
  );
}
