'use client';

import Underline from "@/components/Underline";
import { motion } from 'motion/react';
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1>Learn Modern Motion with</h1>
        <div className="relative py-1">
          <span className="block text-xl">Nanas Corps.</span>
          <Underline />
        </div>
        <div className="py-8">
          <Link href='/transformations'>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="py-3 px-6 bg-accent text-secondary shadow-lg rounded-lg cursor-pointer"
            >
              <span className="font-[500]">Get Started</span>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}