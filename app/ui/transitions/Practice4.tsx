'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion, useMotionValue, useTransform, Variants, animate, useAnimation } from "motion/react";
import { useState } from "react";
import { cn } from "@/utils/cn";

export default function Practice4() {
  const [isClicked, setIsClicked] = useState(false);

  const clickProgress = useMotionValue(0);
  const backgroundColor = useTransform(
    clickProgress,
    [0, 1],
    ["#ffffff", "#ffe66d"],
  );

  const controls = useAnimation();

  const containerVariants: Variants = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: 1.03,
    },
  };

  const textVariants: Variants = {
    rest: {
      y: "0%", opacity: 1,
    },
    hover: {
      y: ["0%", "-100%", "100%", "0%"], opacity: [1, 0, 0, 1],
    },
    leave: {
      y: ["0%", "100%", "-100%", "0%"], opacity: [1, 0, 0, 1],
    },
  };

  return (
    <PopUpContainer>
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        <Practice
          title="Practice 4 - Responsive Animations"
          objective="Make a responsive button that animates on click."
          instructions={[
            <>Using a button using <code>motion.button</code></>,
            "Style the button with Tailwind CSS with different screen sizes.",
            <>Use Motion&apos;s <code>whileTap</code> prop to animate the button when clicked (e.g., scale down).</>,
            <>Add a hover effect using the <code>WhileHover</code> prop.</>,
          ]}
          extraContentBelow={
            <motion.div className="practice-container">
              <motion.button
                variants={containerVariants}
                onClick={async () => {
                  const newState = !isClicked;
                  setIsClicked(newState);
                  animate(clickProgress, newState ? 1 : 0, {
                    duration: .2,
                    ease: 'easeInOut',
                  });
                  // Replay the same text animation on click
                  await controls.start('hover');
                }}
                style={{ backgroundColor }}
                className={cn(
                  "button py-3 px-6",
                  "md:px-7 md:text-[1rem]",
                  "lg:px-8 lg:text-[1.1rem]",
                  isClicked ? "bg-accent" : "",
                )}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => controls.start('hover')}
                onHoverEnd={() => controls.start('leave')}
              >
                <div
                  className={cn(
                    "h-6 overflow-hidden",
                )}>
                  <motion.p
                    className="pointer-events-none"
                    variants={textVariants}
                    initial="rest"
                    animate={controls}
                    transition={{
                      type: "tween",
                      duration: 0.4,
                      times: [0, 0.49, 0.51, 1],
                      ease: [0.175, 0.885, 0.32, 1.1],
                    }}
                  >
                    { isClicked ? "I'm responsive!" : "Click Me" }
                  </motion.p>
                </div>
              </motion.button>
            </motion.div>
          }
        />
      </div>
    </PopUpContainer>
  );
}