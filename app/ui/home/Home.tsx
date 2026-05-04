'use client';

import Underline from "@/components/Underline";
import { motion, Variants } from 'motion/react';
import Link from "next/link";
import Banana from "@/public/assets/icons/banana";
import { Arrow2Icon } from "@/public/assets/assets";

export default function Home() {
  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex items-center justify-center flex-1 px-6">
      <motion.div 
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center justify-center text-center"
      >
        <motion.div 
          variants={itemVariants}
          className="mb-4"
        >
          <Banana width={50} height={50} className="text-accent" />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="relative py-2 group"
        >
          <h1 className="text-[2rem] md:text-6xl font-[700] tracking-tight">
            The Nanas Lab
          </h1>
          <Underline className="h-1 w-[85%] mx-auto origin-center" />
        </motion.div>
        <motion.p 
          variants={itemVariants}
          className="text-[1.1rem] md:text-[1.2rem] max-w-xl opacity-70 mt-5 font-light text-balance"
        >
          Deconstructing the mechanics of modern web motion. An implementation-first laboratory for high-end animation patterns and Motion v12 research.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href='/transformations'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-10 bg-accent text-secondary rounded-lg cursor-pointer font-medium"
            >
              Explore the Lab
            </motion.div>
          </Link>

          <Link href="https://motion.dev" target="_blank">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-10 border-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="font-medium">Read Docs</span>
              <Arrow2Icon width={24} height={24} />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}