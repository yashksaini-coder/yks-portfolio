import type { Metadata } from "next";
import localFont from 'next/font/local'

import "./globals.css";
import Navbar from "@/components/common/navbar";
import RootProviders from "@/components/provider/theme";

const WDLXLLubrifontTCRegular = localFont({
  src: '../../public/fonts/WDXLLubrifontTC-Regular.ttf',
  weight: '400',
  style: 'normal',
})


export const metadata: Metadata = {
  title: "YkS",
  description: "YkS",
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
        <main className="mx-auto px-10 py-4 min-h-screen selection:text-violet-700 selection:bg-violet-500/20">
        <RootProviders>
          <Navbar />
          {children}
        </RootProviders>
        </main>
      </body>
    </html>
  );
}
