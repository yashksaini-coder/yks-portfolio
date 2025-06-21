import React from "react";
import type { LucideProps } from "lucide-react";

interface Props {
  href?: string; // Made optional since it's now conditional
  children?: React.ReactNode;
  icon?: React.ComponentType<LucideProps>; //TODO: Update from Lucide to actual SVG react component prop
  size?: number;
  content?: string;
  color?: 'red' | 'blue' | 'violet' | 'purple' | 'sky' | 'green' | 'orange' | 'yellow' | 'pink' | 'gray' | 'slate' | 'zinc' | 'neutral' | 'stone' | 'amber' | 'lime';
}

export default function CustomText({ 
  href, 
  children, 
  icon: Icon, 
  size = 6, 
  content, 
  color = 'purple'
}: Props) {
  // Define color mappings for different states
  const colorClasses = {
    red: {
      base: 'text-red-100/30',
      hover: 'hover:text-red-600 hover:border-red-600',
      focus: 'focus:ring-red-500'
    },
    blue: {
      base: 'text-blue-100/30',
      hover: 'hover:text-blue-600 hover:border-blue-600',
      focus: 'focus:ring-blue-500'
    },
    violet: {
      base: 'text-violet-100/30',
      hover: 'hover:text-violet-600 hover:border-violet-600',
      focus: 'focus:ring-violet-500'
    },
    purple: {
      base: 'text-purple-100/30',
      hover: 'hover:text-purple-600 hover:border-purple-600',
      focus: 'focus:ring-purple-500'
    },
    sky: {
      base: 'text-sky-100/30',
      hover: 'hover:text-sky-600 hover:border-sky-600',
      focus: 'focus:ring-sky-500'
    },
    green: {
      base: 'text-green-100/30',
      hover: 'hover:text-green-600 hover:border-green-600',
      focus: 'focus:ring-green-500'
    },
    orange: {
      base: 'text-orange-100/30',
      hover: 'hover:text-orange-600 hover:border-orange-600',
      focus: 'focus:ring-orange-500'
    },
    yellow: {
      base: 'text-yellow-100/30',
      hover: 'hover:text-yellow-600 hover:border-yellow-600',
      focus: 'focus:ring-yellow-500'
    },
    pink: {
      base: 'text-pink-100/30',
      hover: 'hover:text-pink-600 hover:border-pink-600',
      focus: 'focus:ring-pink-500'
    },
    gray: {
      base: 'text-gray-100/30',
      hover: 'hover:text-gray-600 hover:border-gray-600',
      focus: 'focus:ring-gray-500'
    },
    slate: {
      base: 'text-slate-100/30',
      hover: 'hover:text-slate-600 hover:border-slate-600',
      focus: 'focus:ring-slate-500'
    },
    zinc: {
      base: 'text-zinc-100/30',
      hover: 'hover:text-zinc-600 hover:border-zinc-600',
      focus: 'focus:ring-zinc-500'
    },
    neutral: {
      base: 'text-neutral-100/30',
      hover: 'hover:text-neutral-600 hover:border-neutral-600',
      focus: 'focus:ring-neutral-500'
    },
    stone: {
      base: 'text-stone-100/30',
      hover: 'hover:text-stone-600 hover:border-stone-600',
      focus: 'focus:ring-stone-500'
    },
    amber: {
      base: 'text-amber-100/30',
      hover: 'hover:text-amber-600 hover:border-amber-600',
      focus: 'focus:ring-amber-500'
    },
    lime: {
      base: 'text-lime-100/30',
      hover: 'hover:text-lime-600 hover:border-lime-600',
      focus: 'focus:ring-lime-500'
    },
  };

  const selectedColors = colorClasses[color];

  return (
    <a
      href={href}
      target="_blank"
      className={`${selectedColors.base} leading-none cursor-none transition-colors hover:underline ${selectedColors.hover} focus:outline-none focus:ring-2 ${selectedColors.focus} focus:ring-offset-2 inline-flex items-center gap-2 mr-1`}
      rel="noopener noreferrer"
      title={typeof children === "string" ? children : undefined}
      aria-label={typeof children === "string" ? children : undefined}
    >
      {Icon && (
        <Icon className={`size-${size} text-current`} />
      )}
      {content ? content : ""}
      {children}
    </a>
  );
}