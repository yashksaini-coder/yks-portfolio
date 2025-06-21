"use client";

import { useRef } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "@/components/SVG/index";

import type {
  MailHandle,
  GithubHandle,
  LinkedinHandle,
  TwitterHandle,
} from "@/components/SVG/index";

export default function SocialLinks() {
  const twitterIconRef = useRef<TwitterHandle>(null);
  const githubIconRef = useRef<GithubHandle>(null);
  const linkedinIconRef = useRef<LinkedinHandle>(null);
  const mailIconRef = useRef<MailHandle>(null);

  const handleTwitterMouseEnter = () => {
    twitterIconRef.current?.startAnimation();
  };

  const handleTwitterMouseLeave = () => {
    twitterIconRef.current?.stopAnimation();
  };

  const handleGithubMouseEnter = () => {
    githubIconRef.current?.startAnimation();
  };

  const handleGithubMouseLeave = () => {
    githubIconRef.current?.stopAnimation();
  };

  const handleLinkedinMouseEnter = () => {
    linkedinIconRef.current?.startAnimation();
  };

  const handleLinkedinMouseLeave = () => {
    linkedinIconRef.current?.stopAnimation();
  };

  const handleMailMouseEnter = () => {
    mailIconRef.current?.startAnimation();
  };

  const handleMailMouseLeave = () => {
    mailIconRef.current?.stopAnimation();
  };

  return (
    <div className="flex flex-row gap-3">
      <a
        href="https://www.x.com/yash_k_saini"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-start gap-2.5 
      text-white transition duration-300 ease-in-out
       hover:bg-neutral-900 rounded-md px-3 py-2.5
      group"
        onMouseEnter={handleTwitterMouseEnter}
        onMouseLeave={handleTwitterMouseLeave}
      >
        <Twitter
          ref={twitterIconRef}
          className="text-white text-xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12"
          size={20}
        />
      </a>
      <a
        href="https://github.com/yashksaini-coder"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-start gap-2.5 
     text-white transition duration-300 ease-in-out
      hover:bg-neutral-900 rounded-md px-3 py-2.5
     group  
   "
        onMouseEnter={handleGithubMouseEnter}
        onMouseLeave={handleGithubMouseLeave}
      >
        <Github
          ref={githubIconRef}
          className="text-white text-xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6"
          size={20}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/yashksaini/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-start gap-2.5 
     text-white transition duration-300 ease-in-out
      hover:bg-neutral-900 rounded-md px-3 py-2.5
     group  
   "
        onMouseEnter={handleLinkedinMouseEnter}
        onMouseLeave={handleLinkedinMouseLeave}
      >
        <Linkedin
          ref={linkedinIconRef}
          className="text-white text-xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:-rotate-6"
          size={20}
        />
      </a>
      <a
        href="mailto:yashksaini89@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-start gap-2.5 
     text-white transition duration-300 ease-in-out
      hover:bg-neutral-900 rounded-md px-3 py-2.5
     group  
   "
        onMouseEnter={handleMailMouseEnter}
        onMouseLeave={handleMailMouseLeave}
      >
        <Mail
          ref={mailIconRef}
          className="text-white text-xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:-rotate-12"
          size={20}
        />
      </a>
    </div>
  );
}