"use client";

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion, stagger, Variants } from "motion/react";

export default function Lab3() {
  const containerVariants: Variants = {
    initial: {

    },
    animate: {
      transition: {
        delayChildren: stagger(.1, { from: 'first', ease: 'easeInOut' },),
      }
    },
  };

  const buttonVariants: Variants = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: [10, -10, 0],
      opacity: 1,
      transition: {
        duration: .3,
        ease: 'easeInOut',
      }
    },
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 3 - Stagger Button Press"
        objective="Create a set of buttons that animate into view with a staggered effect when hovered over."
        instructions={[
          'Create a set of buttons.',
          <>Use <code>motion.button</code> to animate each button.</>,
          'Implemenet a staggered animation effect when hovering over the button container.',
        ]}
        navLinkType="staggers"
        extraContentBelow={
          <div className="practice-container">
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              {Array.from({ length: 4 }).map((_, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  variants={buttonVariants}
                >
                  <motion.button 
                    className="relative px-6 py-3 rounded-lg bg-accent text-secondary border-3 border-secondary font-semibold shadow-lg cursor-pointer z-10"
                    whileHover={{ scale: 1.1, x: -6, y: -5 }}
                    transition={{
                      type: "spring",
                      stiffness: 800,
                      damping: 80,
                      mass: 6.2,
                    }}
                  >
                    Button {index + 1}
                  </motion.button>
                  <div className="absolute top-[10%] left-[3%] w-full h-full bg-foreground rounded-lg" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        }
      />
    </PopUpContainer>
  );
}