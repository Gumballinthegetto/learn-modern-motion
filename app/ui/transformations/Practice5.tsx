'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion, Variants } from "motion/react";
import { useState } from "react";

export default function Practice5() {
  const [animate, setAnimate] = useState(false);

  const containerVariants: Variants = {
    initial: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
    },
    animate: {
      x: [0, -50, -100, -50, 0, 50, 100],
      y: [0, 50, 100, 50, 0, -50, -100],
      scale: [1, .6, 1, .6, 1, .6, 1],
      rotate: ['0deg', '-90deg', '90deg', '-90deg', '90deg', '-90deg', '0deg'],
      transition: {
        type: 'tween',
        duration: 2,
        repeat: 1,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 5 - Combined Transformations"
        objective="Create a complex animation combining multiple transformations."
        instructions={[
          'Create a shape (e.g., a square or circle).',
          'Animate the shape to move diagonally while rotating and scaling similtaneously.'
        ]}
        navLinkType='transformations'
        extraContentBelow={
          <div className="practice-container">
            <motion.div
              className="w-[120px] h-[120px] bg-accent rounded-lg"
              variants={containerVariants}
              initial="initial"
              animate={ animate ? "animate" : "initial" }
              onAnimationComplete={() => setAnimate(false)}
            />
            <button onClick={() => setAnimate(true)} className="button">Animate</button>
          </div>
        }
      />
    </PopUpContainer>
  );
}