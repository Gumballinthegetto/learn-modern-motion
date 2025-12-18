'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion, Variants } from "motion/react";

export default function Practice6() {
  const parentVariants: Variants = {
    animate: {
    },
  };

  const box1Variants: Variants = {
    animate: {
      y: [0, -10, 0, 0, 0, 0],
      transition: {
        duration: .6,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      },
    },
  };

  const box2Variants: Variants = {
    animate: {
      y: [0, 0, -10, 0, 0, 0],
      transition: {
        duration: .6,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      },
    },
  };

  const box3Variants: Variants = {
    animate: {
      y: [0, 0, 0, -10, 0, 0],
      transition: {
        duration: .6,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      },
    },
  };

  const box4Variants: Variants = {
    animate: {
      y: [0, 0, 0, 0, -10, 0],
      transition: {
        duration: .6,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      },
    },
  };

  return (
    <PopUpContainer>
      <Practice
        title="Exercise 6 - Wave Effect"
        objective="Create a wave effect using a series of boxes."
        instructions={[
          'Create a series of boxes in a row.',
          'Use keyframes to animate each box with a slight delay to create a wave effect.',
          'Style the boxes with Tailwind CSS.',
        ]}
        navLinkType="keyframes"
        extraContentBelow={
          <div className="practice-container">
            <motion.div
              className="flex items-center justify-center gap-4"
              variants={parentVariants}
              animate="animate"
            >
              <motion.div
                variants={box1Variants}
                className="w-[70px] h-[70px] bg-accent rounded-md"
              />
              <motion.div
                variants={box2Variants}
                className="w-[70px] h-[70px] bg-accent rounded-md"
              />
              <motion.div
                variants={box3Variants}
                className="w-[70px] h-[70px] bg-accent rounded-md"
              />
              <motion.div
                variants={box4Variants}
                className="w-[70px] h-[70px] bg-accent rounded-md"
              />
            </motion.div>
          </div>
        }
      />
    </PopUpContainer>
  );
}