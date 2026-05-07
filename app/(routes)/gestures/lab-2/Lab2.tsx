'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Lab from "@/components/Lab";
import { cn } from "@/utils/cn";
import { motion, Variants } from 'motion/react';
import { useRef, useState } from "react";

export default function Lab2() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <PopUpContainer>
      <Lab
        title="Lab 2 - Draggable Box"
        objective="Create a box that can be dragged around the screen."
        instructions={[
          <>Create a <code>motion.div</code> to represent the box.</>,
          <>Use Motion&apos;s <code>drag</code> functionality to allow dragging.</>,
          'Style the box with Tailwind CSS.',
        ]}
        navLinkType="gestures"
        extraContentBelow={
          <div className="lab-container" ref={constraintsRef}>
            <motion.div
              className={cn(
                "rounded-md w-[120px] h-[120px] bg-accent",
                "cursor-grab"
              )}
              drag
              dragElastic={0.1}
              dragSnapToOrigin
              dragConstraints={constraintsRef}
              transition={{
                type: "spring",
                stiffness: 290,
                damping: 15,
                mass: 2,
              }}
            />
          </div>
        }
      />
    </PopUpContainer>
  );
}