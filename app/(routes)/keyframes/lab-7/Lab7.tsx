'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Lab from "@/components/Lab";
import { motion, Variants } from 'motion/react';

export default function Lab7() {
  const backgroundVariants: Variants = {
    animate: {
      backgroundColor: ["#ffe66d", "#ff6f91", "#845ec2", "#2c73d2", "#ffe66d"],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: 'easeInOut',
      },
    }
  };

  return (
    <PopUpContainer>
      <Lab
        title="Lab 7 - Background Animation"
        objective="Create a background that changes color using keyframes."
        instructions={[
          'Create a full-screen div that acts as a background.',
          'Use keyframes to animate the background color through multiple colors.',
          'Style the div with Tailwind CSS to ensure it covers the screen.',
        ]}
        navLinkType="keyframes"
        extraContentBelow={
          <div className="relative lab-container">
            <motion.div
              variants={backgroundVariants}
              className="rounded-md border absolute inset-8"
              animate="animate"
            />
          </div>
        }
      />
    </PopUpContainer>
  );
}