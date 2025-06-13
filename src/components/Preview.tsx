import React from "react";
import { HyperText } from "@/components/magicui/hyper-text";
import Description from "./common/description";
import { LinkItem } from "./custom/LinkItem";
import { Github, GithubIcon } from "lucide-react";
import GitHub from "./SVG/Github";
export function Preview() {
  return (
    <div>
      <div className="flex md:flex-row flex-col md:items-center justify-between">
        <HyperText className="md:text-4xl text-3xl">Yash K. Saini</HyperText>
        <h2 className="text-muted-foreground md:text-2xl text-sm flex items-center gap-3">
          UttaraKhand, India{" "}
        </h2>
      </div>
      <div className="my-4">
        <Description className="text-slate-300 md:text-xl flex text-sm font-normal">
          Hi, I'm a software developer who loves <LinkItem icon={Github} href="https://github.com/yashksaini-coder" content={"Open Source"} />. Taught myself code. Really passionate about coding, building AI applications, low-level programming stuff too.
          I enjoy working with{" "}
        </Description>
      </div>
    </div>
  );
}
