'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { cn } from "@/utils/cn";
import { motion, Variants } from 'motion/react';
import { useRef, useState } from "react";

export default function Practice2() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <PopUpContainer>
      <Practice
        title="Practice 2 - Draggable Box"
        objective="Create a box that can be dragged around the screen."
        instructions={[
          <>Create a <code>motion.div</code> to represent the box.</>,
          <>Use Motion&apos;s <code>drag</code> functionality to allow dragging.</>,
          'Style the box with Tailwind CSS.',
        ]}
        navLinkType="gestures"
        extraContentBelow={
          <div className="practice-container" ref={constraintsRef}>
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