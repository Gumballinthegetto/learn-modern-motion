'use client';

import { motion } from "motion/react";
import { cn } from "@/utils/cn";

type UnderlineProps = {
  className?: string;
};

export default function Underline({ className }: UnderlineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      exit={{ opacity: 0, scaleX: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
      className={cn("absolute left-0 right-0 bottom-0 h-0.5 bg-accent origin-left rounded-lg", className)}
    />
  );
}