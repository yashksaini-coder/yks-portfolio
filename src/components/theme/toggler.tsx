"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ThemeTogglerProps = {
  className?: string;
}

export default function ThemeToggler({ className }: ThemeTogglerProps) {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const switchTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      case "system":
        setTheme(systemTheme === "light" ? "dark" : "light");
        break;
      default:
        break;
    }
  };

  const toggleTheme = () => {
    // Check if View Transitions API is supported
    if (!document.startViewTransition) switchTheme();
 
    // next-themes does not have startViewTransition type
    document.startViewTransition(switchTheme);
  };


  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      className={cn("size-14 aspect-square p-0", className)}
    >
      <SunIcon className="size-4 md:size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute size-4 md:size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}