import { Preview } from "@/components/Preview";
import { SocialLinks } from "@/components/social-links/index";
import Separator from "@/components/common/Seperator";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <Preview />
      <Separator />
      <SocialLinks />
    </div>
  );
}