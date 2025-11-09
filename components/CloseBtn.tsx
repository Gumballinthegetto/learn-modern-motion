'use client';

import { motion, Variants } from 'motion/react';
import { Dispatch, SetStateAction } from 'react';

type CloseBtnProps = {
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
};

export default function CloseBtn({ isShown, setIsShown }: CloseBtnProps) {
  const closeMenuBtnVariants: Variants = {
    close: {

    },
    open: {

    },
  };

  const closeMenuBtnLine1Variants: Variants = {
    close: {
      rotate: 0,
      y: 0,
    },
    open: {
      rotate: "45deg",
      y: 5,
    },
  };

  const closeMenuBtnLine2Variants: Variants = {
    close: {
      rotate: 0,
      y: 0,
    },
    open: {
      rotate: "-45deg",
      y: -6,
    },
  };

  return (
    <motion.button
      onClick={() => setIsShown((prevState) => !prevState)}
      className="flex flex-col gap-2 items-center justify-center cursor-pointer"
      variants={closeMenuBtnVariants}
      initial="close"
      animate={ isShown ? "open" : "close" }
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className="w-6 h-[3px] bg-white rounded-lg"
        variants={closeMenuBtnLine1Variants}
      />
      <motion.div
        className="w-6 h-[3px] bg-white rounded-lg"
        variants={closeMenuBtnLine2Variants}
      />
  </motion.button>
  );
}