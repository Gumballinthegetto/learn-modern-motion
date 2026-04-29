'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { animate } from "motion";
import { motion, useMotionValue, useTransform } from "motion/react";

export default function Practice3() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const roundedX = useTransform(x, (val) => Math.round(val));
  const roundedY = useTransform(y, (val) => Math.round(val));

  const handleClick = () => {
    animate(x, 100, { type: "spring", velocity: 10 });
    animate(y, -100, { type: "spring", velocity: 10 });

    setTimeout(() => {
      animate(x, 0, { type: "spring", velocity: -10 });
      animate(y, 0, { type: "spring", velocity: -10 });
    }, 2000);
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 3 - Spring-Animation Position"
        objective="Create a box that springs to a new position when clicked."
        instructions={[
          <>Create a <code>motion.div</code> that can be clicked to move to a new position.</>,
          <>Use <code>useMotionValue</code> to control x and y position.</>,
          'Animate the box to a new position with a spring effect.',
          'Map the button text to the x position using useTransform.',
        ]}
        navLinkType="motionValue"
        extraContentBelow={
          <div className="relative practice-container gap-10">
            <motion.button
              onClick={handleClick}
              style={{
                x,
                y,
              }}
              className="button cursor-pointer px-8 py-3"
            >
              Click Me!
            </motion.button>
            <motion.div className="flex items-center justify-between w-[50%] absolute bottom-[15%] right-1/2 translate-x-1/2 rounded-lg border-2 px-8 py-2">
              <p>X: <motion.span className="text-accent">{roundedX}</motion.span></p>
              <p>Y: <motion.span className="text-accent">{roundedY}</motion.span></p>
            </motion.div>
          </div>  
        }
      />
    </PopUpContainer>
  );
}
