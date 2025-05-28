"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import ThemeToggler from "@/components/theme/toggler";

const links = [
  { href: "/", text: "Home" },
  { href: "/w", text: "Writings" },
  { href: "/projects", text: "Projects" },
  { href: "/skills", text: "Skills" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-full flex justify-center">
      <nav className="flex max-w-5xl w-full px-4 py-6 text-sm text-muted-foreground items-center justify-between">
        <div className="flex items-center gap-6">
          {links.map(({ href, text }) => (
            <h4
              className={`hover:text-violet-500 sm:text-sm text-xs duration-300 transition-colors ${
                pathname === href ? "text-violet-500" : ""
              }`}
              key={href}
            >
              <div className={`px-2 py-0.5 ${pathname === href ? 'border-2 border-violet-800 text-white' : 'hover:bg-violet-500/10'}`}>
                <Link href={href} className="flex items-center gap-4 font-medium text-base">
                  {text}
                </Link>
              </div>
            </h4>
          ))}
        </div>
        <ThemeToggler className="h-full border-dashed" />
      </nav>
    </div>
  );
}