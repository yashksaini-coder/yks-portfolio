"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { ChevronRight, Terminal } from "lucide-react";
const links = [
  { href: "/blog", text: "Blog" },
  { href: "/projects", text: "Projects" },
  { href: "/skills", text: "Skills" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-full flex justify-center text-xl font-medium">
      <nav className="mt-2 flex max-w-4xl w-full px-4 py-6 items-center justify-between">
        <Link href="/" className="group">
          <span className="text-purple-700 px-1 flex items-center gap-1">
            <ChevronRight className="h-6 w-6" />
            <span>YkS</span>
            <span className="ml-1 h-4.5 w-2 animate-blink bg-violet-800 inline-block" />
          </span>
        </Link>
        <style jsx>{`
          .animate-blink {
            animation: blink 1s steps(2, start) infinite;
          }
          @keyframes blink {
            to {
              opacity: 0;
            }
          }
        `}</style>
        <div className="flex items-center gap-6">
          {links.map(({ href, text }, index) => (
            <Link 
              href={href} 
              key={href}
              className="group"
            >
              <span className={`group-hover:text-violet-500  px-1 h-6 flex items-center gap-1 ${
                pathname === href ? "text-violet-500" : ""
              }`}>
                _{text.toLowerCase()}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}