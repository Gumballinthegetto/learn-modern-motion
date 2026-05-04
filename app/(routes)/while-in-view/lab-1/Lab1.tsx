'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion } from "motion/react";
import { useRef } from "react";

export default function Lab1() {
  const containerRef = useRef(null);

  return (
    <PopUpContainer>
      <Practice
        title="Practice 1 - Staggered Fade and Slide In"
        objective="Create a list of items that fade and slide in staggered when they come into view."
        instructions={[
          'Add the `whileInView` prop to a `motion.div`.',
          'Define an `initial` state that is hidden (e.g., `opacity: 0`).',
          'Set the `whileInView` state to be visible (e.g., `opacity: 1`).',
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
