import { ArrowUpRightIcon } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ReactElement } from "react";
import type { SocialLink } from "@/types/social-links";
import { cn } from "@/lib/utils";
// import { Icon } from "lucide-react";
export function SocialLinkItem({ icon: Icon, title, description, href }: SocialLink & { icon: React.ComponentType<LucideProps>,  }): ReactElement {
  return (
    <div className="relative">
      <a
      className={cn(
        "group/social-link flex cursor-pointer items-center gap-4 rounded-2xl p-4 transition-colors select-none",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
      href={href}
      target="_blank"
      rel="noopener"
    >
        <div className="relative shrink-0">
          {/* <Image
            className="rounded-xl"
            src={icon}
            alt={title}
            width={48}
            height={48}
            quality={100}
            unoptimized
          /> */}
          {Icon ? <Icon className="pointer-events-none size-8 text-muted-foreground" /> : ""}
          <div className="pointer-events-none absolute inset-0 ring-black/8 ring-inset dark:ring-white/8" />
        </div>

        <div className="flex-1">
          <p className="flex items-center font-heading font-semibold text-xl decoration-ring underline-offset-4 group-hover/social-link:underline">
            {title}
          </p>

          {description && (
            <p className="text-md md:text-lg text-muted-foreground">{description}</p>
          )}
        </div>

        <ArrowUpRightIcon className="size-6 text-muted-foreground group-hover/social-link:text-foreground transition-colors" />
      </a>
    </div>
  );
}

