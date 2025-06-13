import LinkedIn from "@/components/SVG/LinkedIn";
import type { SocialLink } from "../types/social-links";
import GitHub from "@/components/SVG/Github";
import DailyDev from "@/components/SVG/DailyDev";
import XformerlyTwitter from "@/components/SVG/X(twitter)";
import YouTube from "@/components/SVG/Youtube";
import Peerlist from "@/components/SVG/Peerlist";

export const socials: SocialLink[] = [
  {
    icon: LinkedIn,
    title: "LinkedIn",
    description: "yashksaini",
    href: "https://linkedin.com/in/yashksaini",
  },
  {
    icon: GitHub,
    title: "GitHub",
    description: "yashksaini-coder",
    href: "https://github.com/yashksaini-coder",
  },
  {
    icon: DailyDev,
    title: "daily.dev",
    description: "@yashksaini",
    href: "https://app.daily.dev/yashksaini",
  },  {
    icon: XformerlyTwitter,
    title: "X",
    description: "@yash_k_saini",
    href: "https://x.com/yash_k_saini",
  },
  {
    icon: YouTube,
    title: "YouTube",
    description: "Yash K. Saini",
    href: "https://www.youtube.com/@yashksaini",
  },
  {
    icon: Peerlist,
    title: "Peerlist",
    description: "yashksaini",
    href: "https://peerlist.io/yashksaini",
  }
];