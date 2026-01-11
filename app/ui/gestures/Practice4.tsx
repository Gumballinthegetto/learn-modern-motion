'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion, TapInfo, Variants } from 'motion/react';
import { useState } from "react";

export default function Practice4() {
  const [color, setColor] = useState('#ffe66d');

  const colors = ["#ef4444", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#ffe66d"];

  const handleOnTap = (event: PointerEvent) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 4 - Tap to Change Color"
        objective="Create a box that changes color when tapped."
        instructions={[
          <>Create a <code>motion.div</code> for the box.</>,
          <>Use the <code>onTap</code> event to change the box's color.</>,
          'Use Tailwind CSS for styling.',
        ]}
        navLinkType="gestures"
        extraContentBelow={
          <div className="practice-container">
            <motion.div
              className="w-[120px] h-[120px] rounded-md bg-accent cursor-pointer"
              onTap={handleOnTap}
              animate={{ backgroundColor: color }}
              whileTap={{ scale: 0.9 }}
              transition={{
                backgroundColor: { duration: 0.3 },
                scale: { type: "spring", stiffness: 400, damping: 10 }
              }}
            />
          </div>
        }
      />
    </PopUpContainer>
  );
}