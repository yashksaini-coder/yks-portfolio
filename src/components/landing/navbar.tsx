"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import ThemeToggler from "@/components/theme/toggler";

const links = [
  { href: "/", text: "Home", key: "h" },
  { href: "/w", text: "writings", key: "w" },
  { href: "/projects", text: "projects", key: "p" },
  { href: "/skills", text: "skills", key: "s" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleKeyPress = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    const link = links.find((link) => link.key === key);
    if (link) {
      router.push(link.href, { scroll: true });
    }
  };

  React.useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  });

  return (
    <div className="w-full flex justify-center">
      <nav className="flex max-w-3xl w-full px-4 py-6 text-sm text-muted-foreground items-center justify-between">
        <div className="flex items-center gap-6">
          {links.map(({ href, text, key }) => (
            <h4
              className="hover:text-violet-500 sm:text-sm text-xs duration-300 transition-colors"
              key={key}
            >
              <Link href={href}>
                <span className={`${pathname === href && "text-violet-500"}`}>
                  [{key}]
                </span>{" "}
                {text}
              </Link>
            </h4>
          ))}
        </div>
        <ThemeToggler className="h-full border-dashed" />
      </nav>
    </div>
  );
}