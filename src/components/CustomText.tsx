import React from "react";
import type { LucideProps } from "lucide-react";

interface Props {
  href?: string;
  children?: React.ReactNode;
  icon?: React.ComponentType<LucideProps>;
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
  // Define color mappings with proper hover states
  const colorClasses = {
    red: 'text-red-500 hover:bg-red-500 hover:text-slate-100 hover:ring-red-500',
    blue: 'text-blue-500 hover:bg-blue-500 hover:text-slate-100 hover:ring-blue-500',
    violet: 'text-violet-500 hover:bg-violet-500 hover:text-slate-100 hover:ring-violet-500',
    purple: 'text-purple-500 hover:bg-purple-500 hover:text-slate-100 hover:ring-purple-500',
    sky: 'text-sky-500 hover:bg-sky-500 hover:text-slate-100 hover:ring-sky-500',
    green: 'text-green-500 hover:bg-green-500 hover:text-slate-100 hover:ring-green-500',
    orange: 'text-orange-500 hover:bg-orange-500 hover:text-slate-100 hover:ring-orange-500',
    yellow: 'text-yellow-500 hover:bg-yellow-500 hover:text-slate-100 hover:ring-yellow-500',
    pink: 'text-pink-500 hover:bg-pink-500 hover:text-slate-100 hover:ring-pink-500',
    gray: 'text-gray-500 hover:bg-gray-500 hover:text-slate-100 hover:ring-gray-500',
    slate: 'text-slate-500 hover:bg-slate-500 hover:text-slate-100 hover:ring-slate-500',
    zinc: 'text-zinc-500 hover:bg-zinc-500 hover:text-slate-100 hover:ring-zinc-500',
    neutral: 'text-neutral-500 hover:bg-neutral-500 hover:text-slate-100 hover:ring-neutral-500',
    stone: 'text-stone-500 hover:bg-stone-500 hover:text-slate-100 hover:ring-stone-500',
    amber: 'text-amber-500 hover:bg-amber-500 hover:text-slate-100 hover:ring-amber-500',
    lime: 'text-lime-500 hover:bg-lime-500 hover:text-slate-100 hover:ring-lime-500',
  };

  const baseClasses = "leading-none cursor-pointer underline inline-flex items-center rounded-xl gap-2 px-1 py-1 transition-all duration-200 ease-in-out hover:underline-offset-2 hover:underline-offset-2 hover:outline-none hover:ring-2 hover:ring-offset-2";

  return (
    <a
      href={href}
      target="_blank"
      className={`${baseClasses} ${colorClasses[color]}`}
      rel="noopener noreferrer"
      title={typeof children === "string" ? children : undefined}
      aria-label={typeof children === "string" ? children : undefined}
    >
      {Icon && (
        <Icon className={`w-${size} h-${size}`} />
      )}
      {content}
      {children}
    </a>
  );
}
