'use client';

import { motion, stagger, Variants } from "motion/react";
import { useMobileNavbar } from "@/provider/MobileNavbarProvider";

export default function HamburgerMenu() {
  const { isMobileNavOpened } = useMobileNavbar();
  const parentVariants: Variants = {
    opened: {
      transition: {
        delayChildren: stagger(.1, { from: 'first' }),
      },
    },
    closed: {
      transition: {
        delayChildren: stagger(.1, { from: 'last' }),
      },
    },
  };

  const line1Variants: Variants = {
    opened: {
      y: 5,
      rotate: "45deg",
    },
    closed: {
      rotate: 0,
    },
  };
  const line2Variants: Variants = {
    opened: {
      y: -6,
      rotate: "-45deg",
    },
    closed: {
      rotate: 0,
    },
  };

  return (
    <motion.div
      className="group flex flex-col items-center justify-center gap-2 cursor-pointer"
      variants={parentVariants}
      initial="closed"
      animate={isMobileNavOpened ? "opened" : "closed"}
      exit="closed"
      whileHover={{
        scale: 1.1,
      }}
    >
      <motion.div
        className="w-6 h-[3px] bg-foreground rounded-lg transition-colors duration-200 group-hover:bg-accent"
        variants={line1Variants}
      />
      <motion.div
        className="w-6 h-[3px] bg-foreground rounded-lg transition-colors duration-200 group-hover:bg-accent"
        variants={line2Variants}
      />
    </motion.div>
  );
}