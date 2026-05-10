'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Lab from "@/components/Lab";
import { motion, Variants } from "motion/react";
import { MouseScrollIcon } from "@/public/assets/icons";

export default function Lab3() {
  const shapeVariants: Variants = {
    initial: {
      x: -200,
      borderRadius: '50%',
      scale: .5,
      rotate: -90,
      opacity: 0,
    },
    whileInView: {
      x: 0,
      borderRadius: '8%',
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: .8,
        ease: 'easeInOut',
      }
    },
  };

  return (
    <PopUpContainer>
      <Lab
        title="Lab 3 - Complex Timeline Animation"
        objective="Create a sequence of animations that occurs when a section comes into view, including rotation, scaling, and fading."
        instructions={[
          'Set up multiple elements that will animate in a sequence.',
          'Use variants for complex animations.',
          <>Control timing with the <code>transition</code> property.</>,
        ]}
        navLinkType="whileInView"
        extraContentBelow={
          <div className="lab-container">
            <div className="h-[50vh] flex flex-col items-center justify-start gap-4">
              <div className="flex items-center justify-center pt-10 gap-4">
                <MouseScrollIcon className="w-7 h-7" />
                <p className="text-base font-semibold text-white">Scroll down to see the animation</p>
              </div>
            </div>
            <motion.div
              className="bg-accent rounded-lg w-[120px] h-[120px] my-30"
              variants={shapeVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: false, amount: .05 }}
            />
          </div>
        }
      />
    </PopUpContainer>
  );
}
