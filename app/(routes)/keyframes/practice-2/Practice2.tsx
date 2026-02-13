'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion, Variants } from "motion/react";
import { useState } from "react";

export default function Practice2() {
  const [state, setState] = useState<"rest" | "hover" | "leave">("rest");

  const buttonVariants: Variants = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }
    },
    leave: {
      scale: 1,
    },
  };

  const textVariants: Variants = {
    rest: {
      opacity: 1,
    },
    hover: {
      opacity: [1, 0, 0, 1],
      transition: {
        duration: 1,
        times: [0, 0.33, 0.66, 1],
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }
    },
    leave: {
      opacity: 1,
      transition: {
        duration: 0.3,
      }
    },
  };

  return (
    <PopUpContainer>
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        <Practice
          title="Practice 2 - Pulsating Effect"
          objective="Create a pulsating effect on a button using keyframes."
          instructions={[
            <>Create a button using <code>motion.div</code>.</>,
            'Use keyframes to animate the scale of the button, making it pulse.',
            'Apply Tailwind CSS for styling the button.'
          ]}
          navLinkType="keyframes"
          extraContentBelow={
            <div className="practice-container">
              <motion.div
                variants={buttonVariants}
                onClick={() => {
                  setState(state === 'hover' ? 'rest' : 'hover');
                }}
                initial="rest"
                animate={state}
                className="px-5 py-2 rounded-md outline-none bg-foreground text-secondary font-[500] cursor-pointer overflow-hidden"
                onHoverStart={() => setState('hover')}
                onHoverEnd={() => {
                    setState('leave');
                    setTimeout(() => setState('rest'), 250);
                  }
                }
              >
                <motion.p
                  variants={textVariants}
                  animate={state}
                >
                  { state === 'hover' ? "I'm pulsating!" : "Click or hover me" }
                </motion.p>
              </motion.div>
            </div>
          }
        />
      </div>
    </PopUpContainer>
  );
}