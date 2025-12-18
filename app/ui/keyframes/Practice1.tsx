'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { cn } from "@/utils/cn";
import { motion, Variants } from "motion/react";
import { useState } from "react";

export default function Practice1() {
  const [animate, setAnimate] = useState(false);

  const ballVariants: Variants = {
    initial: {
      y: 0,
    },
    animate: {
      y: [0, -100, 0],
      transition: {
        duration: .5,
        times: [0, .5, 1],
        ease: 'easeInOut',
        repeatType: 'loop',
        repeat: 2,
      },
    },
  };

  return (
    <PopUpContainer>
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        <Practice
          title="Practice 1 - Bouncing Ball"
          objective="Create a bouncing ball animation using keyframes."
          instructions={[
            'Create a simple circular div to represent a ball.',
            <>Use Motion&apos;s <code>keyframes</code> to create a bouncing effect.</>,
            'Style the ball with Tailwind CSS for color and size.',
          ]}
          navLinkType="keyframes"
          extraContentBelow={
            <div className="practice-container">
              <motion.div
                variants={ballVariants}
                className="rounded-full w-[120px] h-[120px] bg-accent"
                initial="initial"
                animate={ animate ? "animate" : "initial" }
                onAnimationComplete={() => setAnimate(false)}
              />
              <motion.button
                onClick={() => setAnimate(true)}
                className={cn(
                    'button',
                    animate ? 'cursor-not-allowed opacity-50' : '',
                  )}
                disabled={animate ? true : false}
              >
                Animate
              </motion.button>
            </div>
          }
        />
      </div>
    </PopUpContainer>
  );
}