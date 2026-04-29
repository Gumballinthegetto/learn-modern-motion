'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { animate } from "motion";
import { motion, useMotionValue, useTransform } from "motion/react";

export default function Practice2() {
  const scale = useMotionValue(1);
  const backgroundColor = useMotionValue('#ededed')

  const roundedScale = useTransform(scale, (val) => val.toFixed(2));

  const handleHoverStart = () => {
    scale.set(1.2);
    backgroundColor.set("#ffe66d");
  };

  const handleHoverEnd = () => {
    scale.set(1);
    backgroundColor.set("#ededed");
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 2 - Hover-Linked Scale"
        objective="Create a button that scales up when hovered, using useMotionValue."
        instructions={[
          <>Create a <code>motion.button</code>.</>,
          <>Use <code>useMotionValue</code> to control the scale of the button.</>,
          'Update the scale value on hover and reset it when not hovered.',
        ]}
        navLinkType="motionValue"
        extraContentBelow={
          <div className="relative practice-container gap-10">
            <motion.button
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              style={{
                scale,
                backgroundColor,
              }}
              className="button px-8 py-3"
              transition={{
                duration: .3,
                ease: [0, 0, 0.2, 1],
              }}
            >
              Hover Me
            </motion.button>
            <motion.div className="absolute bottom-[15%] right-1/2 translate-x-1/2 rounded-lg border-2 px-8 py-2">
              <p>Scale: <motion.span className="text-accent">{roundedScale}</motion.span></p>
            </motion.div>
          </div>
        }
      />
    </PopUpContainer>
  );
}
