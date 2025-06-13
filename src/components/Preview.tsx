import React from "react";
import { HyperText } from "@/components/magicui/hyper-text";
import Description from "./common/description";
import CustomATag from "./CustomATag";

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
        <Description className="text-slate-200 md:text-[20px] text-sm align-middle">
          Hi, I'm Yash K. Saini a software developer who loves Open Source Contribution. Really passionate about coding, building AI applications, low-level programming stuff too.&nbsp;I enjoy working with{" "} 
          I have a background in Data Science and believe in the power of collaboration. Check out my work on{" "}
          <CustomATag href="https://github.com/yashksaini/CrossPostHub">
            CrossPostHub
          </CustomATag>&#39;
          <CustomATag href="https://dev.to/yashksaini">Dev.to</CustomATag>{" "}
        </Description>
      </div>
    </div>
  );
}
