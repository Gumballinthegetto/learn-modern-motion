'use client';

import Image from "next/image";
import { FingerAccessIcon } from "@/public/assets/assets";
import Underline from "./Underline";
import Link from "next/link";
import { motion, Variants } from 'motion/react';

export default function NotFound() {
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
    >
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Image
          src="/assets/404-error.png"
          alt="404"
          width={400}
          height={600}
          className="h-auto w-[min(90vw,320px)] max-h-[60vh]"
          sizes="(max-width: 640px) 90vw, 320px"
          priority
        />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-lg">It seems you got a little bit lost</h1>
          <div className="py-14">
            <Link className="flex flex-col items-center justify-center gap-1 cursor-pointer" href="/">
              <FingerAccessIcon width={30} height={30} />
              <div className="relative py-1">
                <button>Go to Home</button>
                <Underline />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}