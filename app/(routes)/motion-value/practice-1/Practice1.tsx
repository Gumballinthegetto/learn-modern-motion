'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useRef } from "react";

export default function Practice1() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const containerRef = useRef(null);

  const roundedX = useTransform(x, (val) => Math.round(val));
  const roundedY = useTransform(y, (val) => Math.round(val));

  return (
    <PopUpContainer>
      <Practice
        title="Practice 1 - Draggable Box"
        objective="Create a draggable box that updates its position using useMotionValue."
        instructions={[
          <>Create a <code>motion.div</code> that can be dragged around.</>,
          <>Use <code>useMotionValue</code> to track the x and the y position of the box.</>,
          'Display the current position of the box as text.',
        ]}
        navLinkType="motionValue"
        extraContentBelow={
          <div ref={containerRef} className="practice-container">
            <motion.div
              className="bg-accent rounded-lg w-[120px] h-[120px] cursor-grab active:cursor-grabbing"
              drag
              dragConstraints={containerRef}
              style={{
                x,
                y,
              }}
            />
            <div className="flex items-center justify-between rounded-lg border-2 px-8 py-2 w-[50%]">
              <p>X: <motion.span className="text-accent">{roundedX}</motion.span></p>
              <p>Y: <motion.span className="text-accent">{roundedY}</motion.span></p>
            </div>
          </div>  
        }
      />
    </PopUpContainer>
  );
}
