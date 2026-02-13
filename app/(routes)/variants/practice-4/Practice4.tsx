'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion, Variants } from "motion/react";
import { useState } from "react";

// Track path component (the container) - as motion.path
const ToggleTrack = ({ variants, initial, animate }: { variants: Variants; initial: string; animate: string }) => (
  <motion.path
    d="M16 6H8C4.68629 6 2 8.68629 2 12C2 15.3137 4.68629 18 8 18H16C19.3137 18 22 15.3137 22 12C22 8.68629 19.3137 6 16 6Z" 
    fill="#ffe66f"
    stroke="#222222"
    strokeWidth="1.5"
    variants={variants}
    initial={initial}
    animate={animate}
  />
);

// Ball path component (the toggle knob) - as motion.path
const ToggleBall = ({ variants, initial, animate }: { variants: Variants; initial: string; animate: string }) => (
  <motion.path
    d="M11 12C11 13.6569 9.65685 15 8 15C6.34315 15 5 13.6569 5 12C5 10.3431 6.34315 9 8 9C9.65685 9 11 10.3431 11 12Z" 
    fill="#ffffff"
    stroke="#222222"
    strokeWidth="1.5"
    variants={variants}
    initial={initial}
    animate={animate}
  />
);

export default function Practice4() {
  const [isOn, setIsOn] = useState(false);

  const trackVariants: Variants = {
    on: {
      fill: "#22c55e", // green when on
      transition: {
        duration: 0.3,
      },
    },
    off: {
      fill: "#ffe66f", // yellow when off
      transition: {
        duration: 0.3,
      },
    },
  };

  const ballVariants: Variants = {
    on: {
      x: 8, // Move ball to the right (translateX by 8 units)
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
    off: {
      x: 0, // Ball on the left
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practic 4 - Toggle Switch Animation"
        objective='Create a toggle switch that animates between "on" and "off" states.'
        instructions={[
          'Define variants for an "on" and "off" states.',
          <>Create a <code>motion.div</code> that represents the switch.</>,
          'Use Tailwind CSS for styling.',
        ]}
        navLinkType="variants"
        extraContentBelow={
          <div className="practice-container">
            <motion.button
              type="button"
              className="cursor-pointer"
              onClick={() => setIsOn((prev) => !prev)}
            >
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative">
                <ToggleTrack
                  variants={trackVariants}
                  initial={isOn ? "on" : "off"}
                  animate={isOn ? "on" : "off"}
                />
                <ToggleBall
                  variants={ballVariants}
                  initial={isOn ? "on" : "off"}
                  animate={isOn ? "on" : "off"}
                />
              </svg>
            </motion.button>
          </div>
        }
      />
    </PopUpContainer>
  );
}