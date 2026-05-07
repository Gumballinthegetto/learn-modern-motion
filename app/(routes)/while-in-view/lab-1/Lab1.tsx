'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Lab from "@/components/Lab";
import { motion, stagger, Variants } from "motion/react";
import { MouseScrollIcon } from "@/public/assets/icons";

export default function Lab1() {
  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: stagger(.1, { from: 'first' }),
        when: 'beforeChildren', // Wait for the parent to finish before starting the children
      },
    },
  };

  const itemsVariants: Variants = {
    initial: {
      y: -10,
      x: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  }; 
  
  return (
    <PopUpContainer>
      <Lab
        title="Lab 1 - Staggered Fade and Slide In"
        objective="Create a list of items that fade and slide in staggered when they come into view."
        instructions={[
          'Create an array of items to display.',
          <>Use <code>motion.ul</code> for the list and <code>motion.li</code> for each item.</>,
          <>Implement staggered animations using <code>variants</code> and the <code>transition</code> prop.</>,
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
            <motion.ul
              className="flex flex-col gap-6 items-center justify-center"
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: .5 }}
            >
              {...Array.from({ length: 4 }, (_, index) => (
                <motion.li
                  key={index}
                  className="w-[90px] h-[90px] bg-accent rounded-lg"
                  variants={itemsVariants}
                />
              ))}
            </motion.ul>
          </div>  
        }
      />
    </PopUpContainer>
  );
}
