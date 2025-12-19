'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { motion, Variants } from 'motion/react';

export default function Practice1() {
  const backgroundVariants: Variants = {
    animate: {
      backgroundColor: ["#ffe66d", "#ff6f91", "#845ec2", "#2c73d2", "#ffe66d"],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: 'easeInOut',
      },
    }
  };

  return (
    <PopUpContainer>
      <Practice
        title=""
        objective=""
        instructions={[
          ''
        ]}
        navLinkType="variants"
      />
    </PopUpContainer>
  );
}