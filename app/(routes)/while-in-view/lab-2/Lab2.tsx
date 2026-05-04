'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion } from "motion/react";
import { useRef } from "react";

export default function Lab2() {
  const containerRef = useRef(null);

  return (
    <PopUpContainer>
      <Practice
        title="Practice 2"
        objective="Trigger animations with a viewport margin."
        instructions={[
          'Use the `viewport` prop to add a `margin` (e.g., `\"-100px\"`).',
          'Observe how the animation triggers before or after the element enters the actual frame.',
          'Combine with `whileInView` for a smooth entry effect.',
        ]}
        navLinkType="whileInView"
        extraContentBelow={
          <div ref={containerRef} className="practice-container">
            <motion.div
              className="bg-accent rounded-lg w-[120px] h-[120px]"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
            />
          </div>  
        }
      />
    </PopUpContainer>
  );
}
