'use client';

import CloseBtn from "@/components/CloseBtn";
import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { KissEmojiIcon } from "@/public/assets/assets";
import { AnimatePresence, motion, Variants } from "motion/react";
import { useEffect, useState } from "react";

export default function Practice6() {
  const [isOpen, setIsOpen] = useState(false);
  const [toastKey, setToastKey] = useState(0);

  const toastVariants: Variants = {
    close: {
      y: "-100%",
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
    },
  };

  const progressBarVariants: Variants = {
    initial: {
      scaleX: 1,
    },
    animate: {
      scaleX: 0,
    },
  };

  const TOAST_DURATION = 3000;

  const handleShow = () => {
    if (!isOpen) {
      setToastKey((key) => key + 1);
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, TOAST_DURATION);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <PopUpContainer>
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        <Practice
          title="Practice 6 - Notification Toast"
          objective="Create a notification toast that slides in from the top when triggered."
          instructions={[
            <>Create a component for a toast notification using <code>motion.div</code>.</>,
            "Style the toast with Tailwind CSS.",
            "Use state to control the visibility of the toast and animate its entrance and exit.",
          ]}
          navLinkType="transitions"
          extraContentBelow={
            <div className="relative practice-container px-6">
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key={toastKey}
                    className="absolute top-5 border rounded-lg py-6 px-4 w-[90%] overflow-hidden"
                    variants={toastVariants}
                    initial="close"
                    animate="open"
                    exit="close"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <KissEmojiIcon width={35} height={35} />
                        <p>Toast got clicked!</p>
                      </div>
                      <CloseBtn
                        isShown={true}
                        setIsShown={setIsOpen}
                      />
                    </div>

                    {/* Progress bar */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-accent origin-left w-full"
                      variants={progressBarVariants}
                      initial="initial"
                      animate="animate"
                      transition={{
                        duration: TOAST_DURATION / 1000,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.button
                onClick={handleShow}
                className="button"
              >
                { isOpen ? "Hide" : "Show" }
              </motion.button>
            </div>
          }
        />
      </div>
    </PopUpContainer>
  );
}