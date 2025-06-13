import { cn } from "@/lib/utils";

export default function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "my-6 h-[40px] bg-muted dark:bg-muted/50",  
        className
      )}
    />
  );
}