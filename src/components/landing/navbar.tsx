"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const links = [
  { href: "/blog", text: "Blog" },
  { href: "/projects", text: "Projects" },
  { href: "/skills", text: "Skills" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-full flex justify-center text-lg">
      <nav className="mt-2 flex max-w-4xl w-full px-4 py-6 items-center justify-between">
        <Link href="/" className="group">
          <span className="text-violet-700 font-bold hover:text-black hover:bg-violet-500 px-1">
            YkS
          </span>
        </Link>
        <div className="flex items-center gap-6">
          {links.map(({ href, text }, index) => (
            <Link 
              href={href} 
              key={href}
              className="group"
            >
              <span className={`group-hover:text-black group-hover:bg-accent ${
                pathname === href ? "text-black bg-accent" : ""
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