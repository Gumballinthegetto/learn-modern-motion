'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion, Variants } from 'motion/react';
import { useState } from "react";

export default function Practice4() {
  const [animate, setAnimate] = useState(false);

  const slideFromTheLeftVariants: Variants = {
    initial: {
      x: "-100%",
      opacity: 0,
      transition: {
        ease: 'easeInOut',
      }
    },
    animate: {
      x: ["-100%", "0%"],
      opacity: [0, 1],
      transition: {
        duration: .3,
        type: "spring",
        stiffness: 900,
        damping: 80,
        mass: 10,
      },
    },
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 4 - Sliding Text"
        objective="Create a text components that slides in from the left using keyframes."
        instructions={[
          'Create a text component that animates in from the left.',
          'Use keyframes to define the movement from off-screen to its final position.',
          'Apply Tailwind CSS for styling the text.',
        ]}
        navLinkType="keyframes"
        extraContentBelow={
          <div className="practice-container">
            <motion.div
              variants={slideFromTheLeftVariants}
              initial="initial"
              className="border px-6 py-3 rounded-md bg-white text-secondary"
              animate={ animate ? 'animate' : 'initial' }
            >
              <p className="font-[500] text-[1.1rem]">I&apos;m sliding from the left!</p>
            </motion.div>
            <button onClick={() => setAnimate((prevState) => !prevState)} className="button">{ animate ? 'Reset' : 'Animate' }</button>
          </div>
        }
      />
    </PopUpContainer>
  );
}