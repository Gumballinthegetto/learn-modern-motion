'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion, Variants } from 'motion/react';
import { useState } from "react";

export default function Practice4() {
  const [animate, setAnimate] = useState(false);

  const containerVariants: Variants = {
    initial: {
      skewX: 0,
      skewY: 0,
    },
    animate: {
      skewX: 10,
      skewY: 10,
    },
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 4 - Skewed Transition"
        objective="Animate a rectangle and return to normal when clicked again."
        instructions={[
          'Create a rectangle using tailwind CSS.',
          'On click, skew the rectangle and return to normal when clicked again.',
        ]}
        navLinkType='transformations'
        extraContentBelow={
          <div className="practice-container">
            <motion.div
              className="w-[180px] h-[120px] bg-accent rounded-lg"
              variants={containerVariants}
              initial="initial"
              animate={ animate ? "animate" : "initial" }
            />
            <button
              onClick={() => setAnimate((prevState) => !prevState)}
              className="button"
              >
                { animate ? 'Back' : 'Animate' }
              </button>
          </div>
        }
      />
    </PopUpContainer>
  );
}