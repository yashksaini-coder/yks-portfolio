import React from "react";
import { HyperText } from "@/components/magicui/hyper-text";
import Description from "./common/description";
// import { Github } from "lucide-react";
import CustomText from "./CustomText";
// import {LoopSentences} from "./custom/LoopSentence";
import SocialLinks from "./social-links";
import Image from "next/image";

export function Preview() {
  return (
    <div>
      <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-6 md:gap-4">
        <div className="flex flex-col items-start flex-1 min-w-0">
          <div className="h-12 md:h-16 flex flex-row items-center w-full">
            <HyperText className="md:text-4xl text-3xl font-bold leading-none text-violet-700 whitespace-nowrap">
              Yash K. Saini
            </HyperText>
          </div>
          <div className="flex flex-row items-center gap-2 md:gap-4">
            <SocialLinks />

          </div>
        </div>
        <div className="flex flex-col items-center gap-2 md:gap-4 md:h-[140px] md:w-[140px] rounded-full">
          <Image
            src="https://avatars.githubusercontent.com/u/115717039?v=4"
            alt="Yash K. Saini"
            className="rounded-full h-full w-full object-cover"
            width={140}
            height={140}
          />
        </div>
      </div>
      <div className="my-4">
        <Description className="text-slate-300 md:text-[17px] text-sm font-normal text-justify">
          Hi, I'm a self-taught developer who loves <CustomText href="https://github.com/yashksaini-coder" content="Open Source" color="violet"/>. Passionate about coding, building applications, and learning low-level programming stuff too.{` `}
          I enjoy working with{" "} <CustomText href="https://www.python.org/" color="sky" content="Python" /> and <CustomText href="https://www.typescriptlang.org/" color="blue" content="TypeScript" />,
          and currently learning {" "} <CustomText content="Rust" color="orange"/>
          <br />
          I also document my learning journey on{" "}
          <CustomText href="https://www.youtube.com/@yashksaini" content="YouTube" color="red" /> and{" "}
        </Description>
      </div>
    </div>
  );
}


