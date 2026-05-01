'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion } from "motion/react";
import { useRef } from "react";

export default function Practice3() {
  const containerRef = useRef(null);

  return (
    <PopUpContainer>
      <Practice
        title="Practice 3"
        objective="Create a 'once-only' viewport animation."
        instructions={[
          "Add `once: true` to the `viewport` configuration.",
          "Verify that the animation only runs the first time the element enters view.",
          "Scroll up and down to ensure it doesn't repeat.",
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
