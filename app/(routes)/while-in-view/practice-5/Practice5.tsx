'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion } from "motion/react";
import { useRef } from "react";

export default function Practice5() {
  const containerRef = useRef(null);

  return (
    <PopUpContainer>
      <Practice
        title="Practice 5"
        objective="Coordinate multiple elements entering the view."
        instructions=['Apply `whileInView` to multiple child elements.', 'Use transition delays to create a sequential entrance.', 'Ensure the container is large enough to require scrolling.']
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
