'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion, stagger, Variants } from "motion/react";
import { useState } from "react";

export default function Practice6() {
  const [animate, setAnimate] = useState(false);

  const containerVariants: Variants = {
    initial: {
    },
    animate: {
      transition: {
        duration: 2,
        delayChildren: stagger(.4, { from: 'first', ease: 'easeInOut' }),
      },
    },
  };

  const firstElementVariants: Variants = {
    initial: {
      x: 0,
      y: 0,
    },
    animate: {
      x: 10,
      y: -10,
    },
  };

  const secondElementVariants: Variants = {
    initial: {
      rotate: 0,
      y: 0,
    },
    animate: {
      y: 10,
      rotate: 180,
    },
  };

  const thirdElementVariants: Variants = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: 1.2,
    },
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 6 - Sequential Transformations"
        objective="Create an animation sequence."
        instructions={[
          'Use multiple elements (e.g., squares).',
          'Animate them in a sequence where one moves right, then the next one follows after a delay, using different transformations (e.g., move, rotate).'
        ]}
        navLinkType="transformations"
        extraContentBelow={
          <div className="practice-container">
            <motion.div
              className="flex items-center justify-center gap-4"
              variants={containerVariants}
              initial="initial"
              animate={ animate ? "animate" : "initial" }
              onAnimationComplete={() => setAnimate(false)}
            >
              <motion.div
                className="w-[120px] h-[120px] bg-accent rounded-lg"
                variants={firstElementVariants}
              />
              <motion.div
                className="w-[120px] h-[120px] bg-accent rounded-lg"
                variants={secondElementVariants}
              />
              <motion.div
                className="w-[120px] h-[120px] bg-accent rounded-lg"
                variants={thirdElementVariants}
              />
              </motion.div>
              <button onClick={() => setAnimate(true)} className="button">Animate</button>
          </div>
        }
      />
    </PopUpContainer>
  );
}