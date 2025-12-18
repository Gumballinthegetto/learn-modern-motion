'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion, Variants } from "motion/react";

export default function Practice3() {
  const squareVariants: Variants = {
    animate: {
      backgroundColor: ["#ffe66d", "#ff6f91", "#845ec2", "#2c73d2", "#ffe66d"],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: 'easeInOut',
      },
    },
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 3 - Color Change Animation"
        objective="Create a component that changes color using keyframes."
        instructions={[
          'Create a square div that changes color continously.',
          'Use keyframes to define multiple color of the animation.',
          'Style the square with Tailwind CSS.',
        ]}
        navLinkType="keyframes"
        extraContentBelow={
          <div className="practice-container">
            <motion.div
              className="w-[120px] h-[120px] bg-accent rounded-md"
              variants={squareVariants}
              animate="animate"
            />
          </div>
        }
      />
    </PopUpContainer>
  );
}