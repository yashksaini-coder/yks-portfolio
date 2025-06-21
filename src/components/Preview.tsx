import React from "react";
import { HyperText } from "@/components/magicui/hyper-text";
import Description from "./common/description";
import { Github } from "lucide-react";
import CustomText from "./CustomText";
import HindiText from "./custom/HindiText";
export function Preview() {
  return (
    <div>
      <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-6 md:gap-4">
        <div className="flex flex-col items-start flex-1 min-w-0">
          <div className="h-12 md:h-16 flex flex-row items-center w-full">
            <HyperText className="md:text-4xl text-3xl font-bold leading-none whitespace-nowrap">
              Yash K. Saini
            </HyperText>
          </div>
          <div className="flex flex-row items-center gap-2 md:gap-4 mt-2">
            <HindiText
              className="text-white md:text-2xl text-lg flex flex-row items-center gap-3 leading-none"
              text={'उत्तराखंड,'}
            />
            <HindiText
              className="bg-gradient-to-r from-orange-500 via-white to-green-600 bg-clip-text text-transparent md:text-2xl text-lg flex items-center gap-3 leading-none"
              text={'भारत'}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 md:gap-4 mt-2 h-[120px] w-[120px] md:h-[150px] md:w-[150px] bg-red-700 rounded-full">
        </div>
      </div>
      <div className="my-4">
        <Description className="text-slate-300 md:text-[23px] text-sm font-normal text-justify">
          Hi, I'm a software developer who loves <CustomText icon={Github} href="https://github.com/yashksaini-coder" size={4} content="Open Source" />,
          Taught myself code. Really passionate about coding, building applications, Learning about Web3, Cloud, low-level programming stuff too.{` `}
          I enjoy working with{" "} <CustomText href="https://react.dev/" color="sky" content="React" /> and <CustomText href="https://www.typescriptlang.org/" color="blue" content="TypeScript" />,
          and I have been exploring{" "} <CustomText content="Rust" color="orange" />
        </Description>
      </div>
    </div>
  );
}


