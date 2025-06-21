import { user } from "@/data/user";
import Image from "next/image";
import React from "react";
import Description from "./common/description";

export function Contributions() {
  return (
    <div className="space-y-5">
      <h2 className="text-3xl px-2 bg-cyan-700 w-50 inline rounded-xl  ">
        Winning Contributions
      </h2>
      <div className="flex flex-col gap-4 text-stone-400 mb-4 mt-2">
        {user.contributions.map((contribution, index) => (
          <a
            key={index}
            target="_blank"
            className="transition-colors text-stone-50 group"
            href={contribution.link}
          >
            <div className="flex flex-row space-x-2">
              <Image
                className="rounded-full overflow-hidden"
                width={25}
                height={25}
                src={contribution.image}
                alt=""
              />
              <h3 className="text-lg font-semibold">{contribution.title}</h3>
            </div>
            <Description>{contribution.description}</Description>
          </a>
        ))}
      </div>
    </div>
  );
}
