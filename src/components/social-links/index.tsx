import React from "react";

import { socials } from "@/data/social-links";
import { Panel } from "@/components/custom/panel";
import { SocialLinkItem } from "./social-links";

export function SocialLinks() {
  return (
    <Panel>
      <h2 className="sr-only">Social Links</h2>

      <div className="mx-5 relative">
        {/* Background grid lines */}
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          {/* <div className="border-r "></div> */}
          {/* <div className="border-l border-gray-500"></div> */}
        </div>

        {/* Social links grid with improved spacing */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4">
          {socials.map((link, index) => {
            return <SocialLinkItem key={index} {...link} />;
          })}
        </div>
      </div>
    </Panel>
  );
}