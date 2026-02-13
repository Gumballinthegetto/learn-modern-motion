'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion, Variants } from 'motion/react';
import { ReactNode, useRef, useState } from "react";

export default function Practice5() {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isLongPress, setIsLongPress] = useState(false);
  const [size, setSize] = useState(1);

  const handlePressStart = (event: PointerEvent) => {
    timerRef.current = setTimeout(() => {
      setIsLongPress(true);
      setSize(1.5);
    }, 500);
  };

  const handlePressEnd = (event: PointerEvent) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsLongPress(false);
    setSize(1);
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 5 - Long Press to Change Size"
        objective="Create a box that changes its size when long-pressed."
        instructions={[
          <>Create a <code>motion.div</code> that represents the box.</>,
          <>Use the <code>onTap</code> event to detect long presses.</>,
          'Animate the size change when the box is long-pressed.',
        ]}
        navLinkType="gestures"
        extraContentBelow={
          <div className="practice-container">
            <motion.div
              className="w-[120px] h-[120px] rounded-md bg-accent cursor-pointer touch-none select-none"
              style={{
                WebkitUserSelect: "none",
                WebkitTouchCallout: "none",
              }}
              onTapStart={handlePressStart}
              onTap={handlePressEnd}
              onTapCancel={handlePressEnd}
              animate={{ scale: size }}
            />
          </div>
        }
      />
    </PopUpContainer>
  );
}