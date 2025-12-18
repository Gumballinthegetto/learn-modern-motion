'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { cn } from "@/utils/cn";
import { motion, Variants } from "motion/react";
import { useState } from "react";

export default function Practice5() {
  const [animate, setAnimate] = useState(false);

  const boxVariants: Variants = {
    initial: {
      x: 0,
      y: 0,
    },
    animate: {
      x: [0, -80, 80, -80, 80, 0],
      y: [0, -140, -140, 40, 40, 0],
      transition: {
        duration: 1.2,
        ease: 'easeInOut',
      }
    },
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 5 - Zig Zag Animation"
        objective="Create a zigzag animation for a box moving across the screen."
        instructions={[
          <>Create a square box using <code>motion.div</code>.</>,
          'Use keyframes to animate the box in a zigzag pattern horizontally.',
          'Style the box with Tailwind CSS.',
        ]}
        navLinkType="keyframes"
        extraContentBelow={
          <div className="relative practice-container">
            <motion.div
              variants={boxVariants}
              initial="initial"
              animate={ animate ? "animate" : "initial" }
              className="w-[120px] h-[120px] bg-accent rounded-md"
              onAnimationComplete={() => setAnimate(false)}
            />
            <button
              className={cn(
                'button absolute bottom-15 left-1/2 -translate-x-1/2',
                animate ? 'cursor-not-allowed opacity-50' : '',
              )}
              onClick={() => setAnimate(true)}
              disabled={animate ? true : false}
            >
              Animate
            </button>
          </div>
        }
      />
    </PopUpContainer>
  );
}