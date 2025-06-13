import React from "react";

export default function Description({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={className}>
      {children}
    </p>
  );
}
