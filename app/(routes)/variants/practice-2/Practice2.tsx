'use client';

import CloseBtn from "@/components/CloseBtn";
import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { navigationConfig } from "@/config/navigation";
import { LampIcon } from "@/public/assets/assets";
import Banana from "@/public/assets/icons/banana";
import { cn } from "@/utils/cn";
import { motion, Variants } from 'motion/react';
import Link from "next/link";
import { useState } from "react";

export default function Practice2() {
  const [isShown, setIsShown] = useState(false);

  const navVariants: Variants = {
    hide: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: .5,
        delay: .3,
        ease: [0, 0, 0.2, 1],
      }
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .5,
        ease: [0, 0, 0.2, 1],
      }
    },
  };

  const closeBtnVariants: Variants = {
    hide: {
      top: 0,
      transition: {
        duration: .5,
        delay: .3,
        ease: [0, 0, 0.2, 1],
      }
    },
    show: {
      top: "calc(100% - 50px)",
      transition: {
        duration: .5,
        ease: [0, 0, 0.2, 1],
      }
    },
  };

  const links = navigationConfig.variants;

  return (
    <PopUpContainer>
      <Practice
        title="Practice 2 - Navigation Menu with Slide Animation"
        objective="Create a navigation menu that slides in from the slide."
        instructions={[
          'Define variants for the open and closed states of the menu.',
          <>Create a <code>motion.div</code> for the menu.</>,
          'Style the menu with Tailwind CSS.',
        ]}
        navLinkType="variants"
        extraContentBelow={
          <div className="relative practice-container">
            <motion.nav
              variants={navVariants}
              initial="hide"
              animate={ isShown ? "show" : "hide" }
              className="absolute top-0 left-0 right-0 bottom-12 border-b bg-black/50"
            >
              <div className="px-6 py-6 flex items-center justify-between border-b w-full">
                <div className="flex items-center justify-start gap-4">
                  <Banana width={26} height={26} className="text-accent" />
                  <p>Nana Corp.</p>
                </div>
                <CloseBtn
                  isShown={isShown}
                  setIsShown={setIsShown}
                />
              </div>
              <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.ul className="flex flex-col gap-10 items-center justify-center">
                  {links.map(({ href, label }) =>
                    <li key={href}>
                      <Link href={href}>{label}</Link>
                    </li>
                  )}
                </motion.ul>
              </div>
            </motion.nav>
            <motion.div
              variants={closeBtnVariants}
              initial="hide"
              animate={ isShown ? "show" : "hide" }
              className={cn(
                "absolute left-1/2 -translate-x-1/2",
                "flex items-center"
              )}
            >
              <motion.button
                onClick={() => setIsShown((prevState) => !prevState)}
                className="cursor-pointer"
              >
                <LampIcon width={30} height={30} />
              </motion.button>
            </motion.div>
          </div>
        }
      />
    </PopUpContainer>
  );
}