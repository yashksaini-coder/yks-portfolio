"use client";
import {user} from "@/data/user";
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
        href={user.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-start gap-2.5 
      text-white transition duration-300 ease-in-out
        rounded-md px-3 py-2.5
      group"
        onMouseEnter={handleTwitterMouseEnter}
        onMouseLeave={handleTwitterMouseLeave}
      >
        <Twitter
          ref={twitterIconRef}
          className="text-white text-xl transition-transform duration-300 hover:text-sky-500 ease-in-out group-hover:scale-110 group-hover:rotate-12"
          size={20}
        />
      </a>
      <a
        href={user.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-start gap-2.5 
     text-white transition duration-300 ease-in-out
       rounded-md px-3 py-2.5
     group  
   "
        onMouseEnter={handleGithubMouseEnter}
        onMouseLeave={handleGithubMouseLeave}
      >
        <Github
          ref={githubIconRef}
          className="text-white text-xl transition-transform duration-300 hover:text-slate-500 ease-in-out group-hover:scale-110 group-hover:rotate-6"
          size={20}
        />
      </a>
      <a
        href={user.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-start gap-2.5 
     text-white transition duration-300 ease-in-out
       rounded-md px-3 py-2.5
     group  
   "
        onMouseEnter={handleLinkedinMouseEnter}
        onMouseLeave={handleLinkedinMouseLeave}
      >
        <Linkedin
          ref={linkedinIconRef}
          className="text-white text-xl transition-transform duration-300 hover:text-blue-500 ease-in-out group-hover:scale-110 group-hover:-rotate-6"
          size={20}
        />
      </a>
      <a
        href={`mailto:${user.email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-start gap-2.5 
     text-white transition duration-300 ease-in-out
       rounded-md px-3 py-2.5
     group  
   "
        onMouseEnter={handleMailMouseEnter}
        onMouseLeave={handleMailMouseLeave}
      >
        <Mail
          ref={mailIconRef}
          className="text-white text-xl transition-transform duration-300 hover:text-red-500 ease-in-out group-hover:scale-110 group-hover:-rotate-12"
          size={20}
        />
      </a>
    </div>
  );
}