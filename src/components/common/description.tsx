import React from "react";

export default function Description({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-slate-200 md:text-[20px] text-sm">{children}</p>
  );
}
