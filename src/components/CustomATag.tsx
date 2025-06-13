import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function CustomATag({ href, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-purple-400/30 border-b-2 leading-none transition-colors hover:text-purple-600 hover:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      rel="noopener noreferrer"
      title={typeof children === "string" ? children : undefined}
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
    </a>
  );
}
