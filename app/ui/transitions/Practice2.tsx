'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { ArrowIcon, SideBarIcon2 } from "@/public/assets/assets";
import Banana from "@/public/assets/icons/banana";
import { AnimatePresence, motion, stagger, Variants } from "motion/react";
import { SetStateAction, useState, Dispatch } from 'react';
import Link from "next/link";
import { useMobileNavbar } from "@/provider/MobileNavbarProvider";
import { cn } from "@/utils/cn";
import { navigationConfig } from "@/config/navigation";
import CloseBtn from "@/components/CloseBtn";

type SideBarProps = {
  setIsShown: Dispatch<SetStateAction<boolean>>;
};

export default function Practice2() {
  const [show, setShow] = useState(false);

  const sideBarBtnVariants: Variants = {
    hidden: {
      x: 0,
      transition: {
        duration: .4,
        ease: "easeInOut",
        delay: .7,
      },
    },
    visible: {
      x: "calc(-100vw + 16px)",
      transition: {
        duration: .4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <PopUpContainer>
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        <Practice
          title="Practice 2 - Slide In from the Left"
          objective="Create a sidebar that slides in from the left when a button is clicked."
          instructions={[
            <>Create a sidebar component using <code>motion.div</code>.</>,
            "Style the sidebar with tailwind CSS (e.g., width, background color)",
            <>Use Motion <code>animate</code> props to slide the sidebar in from the left.</>,
            "Add a button to toggle the sidebar's visibility.",
          ]}
          extraContentBelow={
            <motion.div className="practice-container p-0 relative w-full flex items-center justify-between">
              <motion.button
                onClick={() => setShow((prevState) => !prevState)}
                className={cn(
                  "flex items-center gap-2 absolute top-1/2 -right-[8px] cursor-pointer",
                )}
                variants={sideBarBtnVariants}
                initial="hidden"
                animate={ show ? "visible" : "hidden" }
              >
                <motion.div
                  className="flex items-center gap-1">
                  <span className="text-sm">Click me</span>
                  <ArrowIcon width={24} height={24} />
                </motion.div>
                <SideBarIcon2 className="rotate-270" width={30} height={30} />
              </motion.button>
              <div className="absolute bottom-8 z-10">
                <button
                  className="button"
                  onClick={() => setShow((prevState) => !prevState)}
                >
                  { show ? "Hide" : "Show" }
                </button>
              </div>
              <AnimatePresence>
                {show && (
                  <SideBar
                    setIsShown={setShow}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          }
        />
      </div>
    </PopUpContainer>
  );
}

const SideBar = ({ setIsShown }: SideBarProps) => {
  const { setIsMobileNavOpened } = useMobileNavbar();

  const containerVariants: Variants =  {
    hide: {
      x: "100%",
      opacity: 0,
      transition: {
        delay: .7,
        delayChildren: stagger(.1, { from: 'first', ease: 'easeInOut' }),
        ease: 'easeInOut',
      },
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delayChildren: stagger(.1, { from: 'last', ease: 'easeInOut' }),
        ease: 'easeInOut',
      }
    },
  };

  const linksListVariants: Variants = {
    close: {
      transition: {
        delayChildren: stagger(.1, { from: 'last', ease: 'easeInOut' }),
      }
    },
    open: {
      transition: {
        delayChildren: stagger(.1, { from: 'first', ease: 'easeInOut' }),
      }
    },
  };

  const linksVariants: Variants = {
    close: {
      opacity: 0,
      x: 10,
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };

  const links = navigationConfig.transitions;

  return (
    <motion.div
      className={cn(
        "flex flex-col items-start justify-center bg-black/50 w-full absolute top-0 bottom-0",
      )}
      variants={containerVariants}
      initial="hide"
      animate="show"
      exit="hide"
      transition={{ duration: .4, ease: "easeInOut" }}
    >
      <motion.div className="absolute top-0 flex items-center justify-between w-full border-b p-6">
        <Link
          onClick={() => setIsMobileNavOpened(false)}
          href="/"
          className="flex items-center justify-center gap-2"
        >
          <Banana
            width={22}
            height={22}
            fill="#ffe66d"
          />
          <h1>Nanas Corp.</h1>
        </Link>
        <CloseBtn
          setIsShown={setIsShown}
        />
      </motion.div>
      <motion.ul
        className="flex flex-col items-start gap-8 justify-center px-6 py-8"
        variants={linksListVariants}
        initial="close"
        animate="open"
        exit="close"
      >
        {links.map(({ href, label }) =>
          <motion.li
            key={href}
            variants={linksVariants}
          >
            <Link href={href}>{label}</Link>
          </motion.li>
        )}
      </motion.ul>
    </motion.div>
  );
};