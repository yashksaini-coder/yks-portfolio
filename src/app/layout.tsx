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
  title: "Yash K. Saini",
  description: "Building Open Source Projects, Learning Rust, and Sharing Knowledge",
  openGraph: {
    title: "Yash K. Saini",
    description: "Full-Stack Developer | Building Cool Stuff",
    url: "https://yashksaini.systems",
    siteName: "Yash K. Saini",
    images: [
      {
        url: "https://yashksaini.systems/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yash K. Saini - Full-Stack Developer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash K. Saini",
    description: "Full-Stack Developer | Building Cool Stuff",
    images: ["https://yashksaini.systems/og-image.png"],
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
