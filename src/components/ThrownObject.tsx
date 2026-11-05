"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

interface ThrownObjectProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "top-left" | "top-right";
  distance?: number;
  rotation?: number;
  delay?: number;
  className?: string;
}

export default function ThrownObject({
  children,
  direction = "left",
  distance = 320,
  rotation = 14,
  delay = 0,
  className = "",
}: ThrownObjectProps) {
  const { isTransitioning } = useTheme();

  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -distance, y: 25, rotate: -rotation };
      case "right":
        return { x: distance, y: 25, rotate: rotation };
      case "top-left":
        return { x: -distance * 0.7, y: -distance * 0.5, rotate: -rotation * 1.5 };
      case "top-right":
        return { x: distance * 0.7, y: -distance * 0.5, rotate: rotation * 1.5 };
    }
  };

  const offscreen = getInitialPosition();

  return (
    <div className={className}>
      <motion.div
        animate={
          isTransitioning
            ? {
                opacity: 0,
                x: offscreen.x,
                y: offscreen.y,
                rotate: offscreen.rotate,
                scale: 0.85,
              }
            : {
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
              }
        }
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 17,
          mass: 0.85,
          delay: isTransitioning ? 0 : delay,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
