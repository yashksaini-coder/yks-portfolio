import React from "react";
import type { LucideProps } from "lucide-react";

interface Props {
  href: string;
  children?: React.ReactNode;
  icon?: React.ComponentType<LucideProps>;
  size?: number;
  content?: string;
}

export default function CustomText({ href, children, icon: Icon, size = 6, content }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-purple-100/30 leading-none transition-colors hover:underline hover:text-purple-600 hover:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 inline-flex items-center gap-2"
      rel="noopener noreferrer"
      title={typeof children === "string" ? children : undefined}
      aria-label={typeof children === "string" ? children : undefined}
    >
      {Icon && (
        <Icon className={`size-${size} text-current`} />
      )}
      {content ? content : ""}
      {children}
    </a>
  );
}
