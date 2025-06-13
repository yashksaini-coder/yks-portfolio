import { LucideIcon } from 'lucide-react';
import type { SVGProps } from "react";
export type SocialLink = {
  icon: LucideIcon | React.ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description?: string;
  href: string;
};