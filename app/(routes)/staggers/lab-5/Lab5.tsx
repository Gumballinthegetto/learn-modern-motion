'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Lab from "@/components/Lab";
import { motion, stagger, Variants } from "motion/react";

export default function Lab5() {
  const word = "Staaaggered!";
  const characters = word.split("");

  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: stagger(.1, { from: 'first' }),
      },
    },
  }; 

  const itemVariants: Variants = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: [40, 0, -20],
      color: ["#ededed", "#ededed", "#ffe66d"],
      transition: {
        times: [0, 0.9, 1],
        duration: 0.6,
        ease: [0.175, 0.885, 0.32, 1.1],
      },
    },
  };

  return (
    <PopUpContainer>
      <Lab
        title="Lab 5 - Staggered Text Reveal"
        objective="Create a title where each letter animates into view with a staggered effect."
        instructions={[
          'Split a string into an array of characters.',
          <>Use <code>motion.span</code> to display each character.</>,
          'Implement a staggered animation effect for the characters to appear one after the other.',
        ]}
        navLinkType="staggers"
        extraContentBelow={
          <div className="lab-container">
            <motion.div 
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center text-[3rem] font-bold"
            >
              {characters.map((char, index) => (
                <motion.span 
                  key={index}
                  variants={itemVariants}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>
        }
      />
    </PopUpContainer>
  );
}