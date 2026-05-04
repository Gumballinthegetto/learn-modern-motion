'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { animate, motion, useMotionValue, useTransform } from "motion/react";

export default function Lab4() {
  const rotate = useMotionValue(0);

  const roundedRotate = useTransform(rotate, (val) => `${Math.round(val) % 360}deg`);

  const handleClick = () => {
    // Seamlessly snap the value back to its 0-360 equivalent
    rotate.set(rotate.get() % 360);

    // Animate to a random target (adding 360 ensures it always spins forward)
    animate(rotate, (Math.random() * 360), {
      type: "spring",
      bounce: 0.4,
      duration: 1
    });
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 4 - Dynamic Rotation"
        objective="Create a component that rotates based on a motion value."
        instructions={[
          <>Create a <code>motion.div</code> that rotates when a button is clicked.</>,
          <>Use <code>useMotionValue</code> to track the rotation angle.</>,
          'Animate the rotation of th box based on the motion value.',
        ]}
        navLinkType="motionValue"
        extraContentBelow={
          <div className="relative practice-container gap-10">
            <motion.div
              style={{
                rotate,
              }}
              className="w-[120px] h-[120px] bg-accent rounded-lg"
            />
            <motion.button
              onClick={handleClick}
              className="button cursor-pointer px-6 py-3"
            >
              Click Me!
            </motion.button>
            <motion.div className="text-center w-[50%] absolute bottom-[15%] right-1/2 translate-x-1/2 rounded-lg border-2 px-8 py-2">
              <p>Angle: <motion.span className="text-accent">{roundedRotate}</motion.span></p>
            </motion.div>
          </div>  
        }
      />
    </PopUpContainer>
  );
}
