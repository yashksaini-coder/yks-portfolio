import type { Metadata } from "next";
import localFont from 'next/font/local'

import "./globals.css";
import Navbar from "@/components/common/navbar";
import RootProviders from "@/components/provider/theme";
import { ScrollTop } from "@/components/custom/scroll-top";

const WDLXLLubrifontTCRegular = localFont({
  src: '../../public/fonts/WDXLLubrifontTC-Regular.ttf',
  weight: '400',
  style: 'normal',
})


export const metadata: Metadata = {
  title: "Yash K. Saini",
  description: "Yash K. Saini's Portfolio",
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
