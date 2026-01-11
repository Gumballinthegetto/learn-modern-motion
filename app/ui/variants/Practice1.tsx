'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion, Variants } from 'motion/react';

export default function Practice1() {
  const fadeInVariants: Variants = {
    initial: {
      y: 40,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: .3,
        ease: [0.175, 0.885, 0.32, 1.275],
      },
    },
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 1 - Simple Fade-In Component"
        objective="Create a component that fades in when it appears."
        instructions={[
          'Define a variant for the fade-in effect.',
          <>Create a <code>motion.div</code> that uses this variant.</>,
          'Use Tailwind CSS for styling the component.',
        ]}
        navLinkType="variants"
        extraContentBelow={
          <div className="practice-container">
            <motion.div
              className="w-[120px] h-[120px] rounded-md bg-accent"
              variants={fadeInVariants}
              initial="initial"
              whileInView="animate"
            />
          </div>
        }
      />
    </PopUpContainer>
  );
}