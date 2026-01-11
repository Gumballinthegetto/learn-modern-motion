'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import Underline from "@/components/Underline";
import { HelpSquareIcon } from "@/public/assets/assets";
import { AnimatePresence, motion, Variants } from 'motion/react';
import Image from "next/image";
import { useState } from "react";

export default function Practice3() {
  const [isHovered, setIsHovered] = useState(false);

  const tooltipVariants: Variants = {
    hide: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: .2,
      },
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 3 - Tooltip with Variants"
        objective="Create a tooltip that appears and disappears with a fade effect."
        instructions={[
          'Define variants for the visible and hidden states of the tooltip.',
          <>Create a <code>motion.div</code> for the tooltip.</>,
          'Style the tooltip with Tailwind CSS.',
        ]}
        navLinkType="variants"
        extraContentBelow={
          <div className="relative practice-container gap-2">
            <motion.div
              className="absolute top-5 flex items-center justify-center">
              <p>Hover or Click this tooltip:</p>
              <motion.button
                className="cursor-pointer p-3"
                onClick={() => setIsHovered((prevState) => !prevState)}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <HelpSquareIcon width={22} height={22} />
              </motion.button>
            </motion.div>
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="flex flex-col items-start gap-4 border rounded-md p-6 mt-7 w-[90%]"
                  variants={tooltipVariants}
                  initial="hide"
                  animate="show"
                  exit="hide"
                >
                  <div className="relative pb-1">
                    <h2 className="font-[500] text-[1.05rem]">Tooltip Showcase</h2>
                    <Underline className="w-[75%]" />
                  </div>
                  <div className="flex items-center justify-center border rounded-md p-3 bg-black/20">
                    <Image
                      src="/assets/tooltip.svg"
                      alt="Tooltip illustration"
                      width={250}
                      height={250}
                      className="w-full h-auto max-w-md"
                    />
                  </div>
                  <p>This is just a demonstration of a tooltip animation.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        }
      />
    </PopUpContainer>
  );
}