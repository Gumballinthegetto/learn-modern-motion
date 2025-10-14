'use client';

import { motion, Variants } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/utils/cn";

type PopUpProps = {
  children?: ReactNode;
  className?: string;
};

export default function PopUpContainer({ children, className }: PopUpProps) {
  const popUpContainerVariants: Variants = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={popUpContainerVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: .2, ease: 'easeInOut' }}
      className={cn("space-y-4 py-4", className)}
    >
      {children}
    </motion.div>
  );
}