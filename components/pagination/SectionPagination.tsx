'use client';

import { navigationConfig } from "@/config/navigation";
import { useSectionPagination } from "@/libs/hooks/useSectionPagination";
import { BackIcon, NextIcon } from "@/public/assets/assets";
import { cn } from "@/utils/cn";
import { motion, Variants } from 'motion/react';
import { useState } from "react";

interface NavLink {
  href: string;
  label: string;
}

type NavigationKey = keyof typeof navigationConfig;

interface SectionPaginationProps {
  links?: NavLink[];
  variant?: NavigationKey;
  className?: string;
}

export function SectionPagination({
  links,
  variant = "transformations",
  className = "",
}: SectionPaginationProps) {
  const resolvedLinks = links ?? navigationConfig[variant] ?? [];
  const  { goToNext, goToPrev, hasNext, hasPrev } = useSectionPagination(resolvedLinks);
  const [prevState, setPrevState] = useState<"rest" | "hover" | "leave">("rest");
  const [nextState, setNextState] = useState<"rest" | "hover" | "leave">("rest");

  const buttonVariants: Variants = {
    rest: {},
    hover: {},
    leave: {},
  };

  const iconVariants: Variants = {
    rest: {
      x: "0%",
      opacity: 1,
    },
    hover: {
      x: ["0%", "100%", "-100%", "0%"],
      opacity: [1, 0, 0, 1],
      transition: {
        times: [0, 0.5, 0.51, 1]
      }
    },
    leave: {
      x: ["0%", "-100%", "100%", "0%"],
      opacity: [1, 0, 0, 1],
    },
  };

  const textPrevVariants: Variants = {
    rest: {
      x: 0,
    },
    hover: {
      x: 5,
    },
    leave: {
      x: 0,
    },
  };

  const textNextVariants: Variants = {
    rest: {
      x: 0,
    },
    hover: {
      x: -5,
    },
    leave: {
      x: 0,
    },
  };

  return (
    <div
      className={cn(
        'flex items-center justify-between w-full',
        'border rounded-lg py-4',
        className,
      )}
    >
      <motion.button
        variants={buttonVariants}
        type="button"
        className={cn(
          "flex items-center justify-center gap-2 w-[100px] overflow-hidden",
          hasPrev ? "cursor-pointer" : "opacity-50 cursor-not-allowed pointer-events-none"
        )}
        onClick={goToPrev}
        disabled={!hasPrev}
        aria-disabled={!hasPrev}
        initial="rest"
        animate={prevState}
        onHoverStart={() => setPrevState("hover")}
        onHoverEnd={() => {
          setPrevState("leave");
          setTimeout(() => setPrevState("rest"), 250);
        }}
      >
        <motion.div
          className="w-5 flex items-center justify-center"
          variants={iconVariants}
          initial="rest"
          animate={prevState}
          transition={{
            type: "tween",
            duration: 0.4,
            times: [0, 0.49, 0.51, 1],
            ease: [0.175, 0.885, 0.32, 1.1],
          }}
        >
          <BackIcon className="min-w-[20px] min-h-[20px] text-white" />
        </motion.div>
        <motion.p
          variants={textPrevVariants}
          initial="rest"
          animate={prevState}
          transition={{
            type: "tween",
            duration: 0.4,
            times: [0, 0.49, 0.51, 1],
            ease: [0.175, 0.885, 0.32, 1.1],
          }}
        >
          Prev
        </motion.p>
      </motion.button>
      <motion.button
        variants={buttonVariants}
        type="button"
        className={cn(
          "flex items-center justify-center gap-2 w-[100px]",
          hasNext ? "cursor-pointer" : "opacity-50 cursor-not-allowed pointer-events-none"
        )}
        onClick={goToNext}
        disabled={!hasNext}
        aria-disabled={!hasNext}
        initial="rest"
        animate={nextState}
        onHoverStart={() => setNextState("hover")}
        onHoverEnd={() => {
          setNextState("leave");
          setTimeout(() => setNextState("rest"), 250);
        }}
      >
        <motion.p
          variants={textNextVariants}
          initial="rest"
          animate={nextState}
          transition={{
            type: "tween",
            duration: 0.4,
            times: [0, 0.49, 0.51, 1],
            ease: [0.175, 0.885, 0.32, 1.1],
          }}
        >
          Next
        </motion.p>
        <motion.div
          className="w-5 flex items-center justify-center overflow-hidden"
          variants={iconVariants}
          initial="rest"
          animate={nextState}
          transition={{
            type: "tween",
            duration: 0.4,
            times: [0, 0.49, 0.51, 1],
            ease: [0.175, 0.885, 0.32, 1.1],
          }}
        >
          <NextIcon className="min-w-[20px] min-h-[20px]" />
        </motion.div>
      </motion.button>
    </div>
  );
}