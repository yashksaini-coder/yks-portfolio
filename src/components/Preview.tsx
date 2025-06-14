import React from "react";
import { HyperText } from "@/components/magicui/hyper-text";
import Description from "./common/description";
import { Github} from "lucide-react";
import CustomText from "./CustomText";
import HindiText from "./custom/HindiText";
export function Preview() {
  return (
    <div>
      <div className="flex md:flex-row flex-col md:items-center justify-between">
        <HyperText className="md:text-4xl text-3xl">Yash K. Saini</HyperText>
        {/* <h2 className="text-muted-foreground md:text-2xl text-sm flex items-center gap-3">
          UttaraKhand, India{" "}
        </h2> */}
        <div className="flex md:flex-row flex-col items-center gap-2">
          <HindiText className="text-white md:text-3xl text-lg flex items-center gap-3" text={'उत्तराखंड,'}/>
        <HindiText className="bg-gradient-to-r from-orange-500 via-white to-green-600 bg-clip-text text-transparent md:text-3xl text-lg flex items-center gap-3" text={'भारत'}/>
        </div>
      </div>
      <div className="my-4">
        <Description className="text-slate-300 md:text-[23px] text-sm font-normal text-justify">
          Hi, I'm a software developer who loves <CustomText icon={Github} href="https://github.com/yashksaini-coder" size={4} content="Open Source"/>
          Taught myself code. Really passionate about coding, building AI applications, low-level programming stuff too.{` `}
          I enjoy working with{" "} <CustomText href="#" content="React" /> and <CustomText icon={Github} href="#" content="TypeScript"/>.
        </Description>
      </div>
    </div>
  );
}
