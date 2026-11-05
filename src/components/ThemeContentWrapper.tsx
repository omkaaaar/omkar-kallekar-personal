"use client";

import React from "react";

export default function ThemeContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-hidden w-full relative">
      {children}
    </div>
  );
}
