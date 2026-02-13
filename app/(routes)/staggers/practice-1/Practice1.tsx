'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import Underline from "@/components/Underline";
import { CarrotIcon, FlowerIcon } from "@/public/assets/assets";
import { AnimatePresence, motion, stagger, Variants } from "motion/react";
import { useState } from "react";

export default function Practice1() {
  const [isShown, setIsShown] = useState(false);

  const myNewYearResolution = [
    '🌱  Take care of my mind like I take care of my body',
    '🚶  Move a little every day',
    '📚  Learn something small but consistent',
    '🫶  Be kinder to myself',
    '🤝  Stay connected with at least one person',
    '✨  Do one thing each week that makes me happy',
  ];

  const parentContainerVariants: Variants = {
    hide: {
      opacity: 0,
      height: 0,
      overflow: 'hidden',
    },
    show: {
      opacity: 1,
      height: 'auto',
      overflow: 'visible',
      transition: {
        height: {
          duration: 0.4,
          ease: 'easeOut',
        },
        opacity: {
          duration: 0.3,
          delay: 0.1,
        },
        when: "beforeChildren",
        delayChildren: stagger(.1, { from: 'first', ease: 'easeInOut' }),
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      overflow: 'hidden',
      transition: {
        height: {
          duration: 0.4,
        },
        opacity: {
          duration: 0.3,
        },
        when: "afterChildren",
        delayChildren: stagger(.09, { from: 'last', ease: 'easeInOut' }),
      },
    },
  };

  const type1ChildVariants: Variants = {
    hide: {
      x: -10,  // From left
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      x: -10,
      opacity: 0,
    },
  };

  const type2ChildVariants: Variants = {
    hide: {
      x: 10,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      x: 10,
      opacity: 0,
    },
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 1 - Staggered List Items"
        objective="Create a list of items that animate into view with a staggered effect."
        instructions={[
          'Create an array of items (e.g. strings).',
          <>Use <code>motion.div</code> to display each item.</>,
          'Implement a stagger effect so that each item appears one after the other when the component mounts.',
        ]}
        navLinkType="staggers"
        extraContentBelow={
          <div className="practice-container gap-5 pb-12">
            <div className="text-center flex flex-col gap-2">
              <div className="relative pb-1">
                <h2 className="font-medium text-[1.2rem]">My 2026 New Year Resolution:</h2>
                <Underline className="w-[80%] mx-auto" />
              </div>
              <p>I wish I can:</p>
            </div>

            {/** Show this when user clicks "reveal" button */}
            <AnimatePresence>
              {isShown && (
                <motion.div
                  className="flex flex-col gap-6 px-5"
                  variants={parentContainerVariants}
                  initial="hide"
                  animate="show"
                  exit="exit"
                >
                  {myNewYearResolution.map((wish, index) =>
                    <motion.div
                      variants={ index % 2 === 0 ? type1ChildVariants : type2ChildVariants }
                      key={index}
                      className="relative flex items-center justify-center border rounded-md h-[60px] px-5 text-center text-sm"
                    >
                      <p>{wish}</p>
                      <motion.div
                        className="absolute -right-3 -top-2"
                      >
                        <FlowerIcon width={24} height={24} />
                      </motion.div>
                      <motion.div
                        className="absolute -left-3 -bottom-2"
                      >
                        <CarrotIcon width={24} height={24} />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            <motion.button
              onClick={() => setIsShown((prev) => !prev)}
              className="cursor-pointer button origin-center"
              whileHover={{
                backgroundColor: '#ffe66e',
                transition: { duration: .1, ease: 'easeInOut' },
              }}
            >
              {isShown ? "Hide" : "Reveal"}
            </motion.button>
          </div>
        }
      />
    </PopUpContainer>
  );
}