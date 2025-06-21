import type { LucideProps } from "lucide-react";
import Link from "next/link";
export function LinkItem({
  icon: Icon,
  size = 6, // Default size is 6, but it can be overridden if needed
  content,
  href,
}: {
  icon?: React.ComponentType<LucideProps>;
  size?: number;
  content: React.ReactNode;
  href?: string;
}) {
  return (
    <p className="flex flex-row items-center gap-4 font-mono text-md">
      <span
        className={`flex size-${size} shrink-0 items-center justify-center rounded-lg`}
        aria-hidden="true"
      >
        {Icon ? <Icon className={`pointer-events-none size-${size} text-muted-foreground`} /> : ""}
      </span>

      <p className="text-balance">
        {href ? (
          <Link
            className="decoration-ring underline-offset-4 hover:underline"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </Link>
        ) : (
          content
        )}
      </p>
    </p>
  );
}