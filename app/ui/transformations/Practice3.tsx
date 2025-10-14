'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import Banana from "@/public/assets/icons/banana";
import { cn } from "@/utils/cn";
import { motion, Variants } from "motion/react";
import { useState } from "react";

export default function Practice3() {
  const [animate, setAnimate] = useState(false);

  const containerVariants: Variants = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
        duration: 1,
      }
    },
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 3 - Rotation Animation"
        objective="Spin an icon continuously."
        instructions={[
          'Use an SVG icon or image.',
          'Animate the icon to rotate indefinitely.'
        ]}
        extraContentBelow={
          <motion.div className="practice-container">
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate={ animate ? "animate" : "initial" }
              onAnimationComplete={() => setAnimate(false)}
            >
              <Banana width={120} height={120} className="text-accent" />
            </motion.div>
            <div className="flex items-center gap-2">
              <button onClick={() => setAnimate(true)} className="button">Animate</button>
              <button
                onClick={() => setAnimate(false)}
                className={cn('button',
                  { 'disabled-button': !animate }
                )}
              >
                Stop
              </button>
            </div>
          </motion.div>
        }
      />
    </PopUpContainer>
  );
}