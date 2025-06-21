import {user} from "@/data/user";
import Image from "next/image";
import React from "react";
import Description from "./common/description";
import CustomText from "./CustomText";
import { CircleDollarSign } from 'lucide-react';

export function Contributions() {
  return (
    <div className="space-y-5">
      <CustomText icon={CircleDollarSign} size={6} content="Winning Contributions" contentSize={'lg'} />
      <div className="flex flex-col gap-4 text-stone-400">
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
