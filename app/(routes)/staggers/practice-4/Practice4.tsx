"use client";

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { cn } from "@/utils/cn";
import { motion, stagger, Variants } from "motion/react";

export default function Practice4() {
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
      y: 40 
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.175, 0.885, 0.32, 1.1],
      },
    },
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 4 - Staggered Grid Layout"
        objective="Create a grid of items that animates into view with a staggered effect."
        instructions={[
          'Create an array of items to be displayed in grid format.',
          <>Use <code>motion.div</code> for each grid items.</>,
          'Implement a staggered effect so that each grid item animates in with a slight delay relative to its position.',
        ]}
        navLinkType="staggers"
        extraContentBelow={
          <div className="practice-container p-6">
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 w-fit max-w-full"
            >
              {[
                "col-span-2 row-span-1",
                "col-span-1 row-span-2",
                "col-span-1 row-span-1",
                "col-span-1 row-span-1",
                "col-span-2 row-span-2",
                "col-span-1 row-span-1",
                "col-span-1 row-span-1",
                "col-span-1 row-span-1",
              ].map((span, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "min-w-[100px] min-h-[100px] rounded-xl border font-semibold flex items-center justify-center cursor-default",
                    span,
                    index % 2 === 0 ? "bg-accent text-secondary border-secondary" : ""
                  )}
                  variants={itemVariants}
                >
                  {index + 1}
                </motion.div>
              ))}
            </motion.div>
          </div>
        }
      />
    </PopUpContainer>
  );
}