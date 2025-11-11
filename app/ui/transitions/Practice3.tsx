'use client';

import CloseBtn from "@/components/CloseBtn";
import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import Underline from "@/components/Underline";
import Banana from "@/public/assets/icons/banana";
import { AnimatePresence, motion, Variants } from "motion/react";
import { Dispatch, SetStateAction, useState } from "react";

type ModalProps = {
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
};

export default function Practice3() {
  const [show, setShow] = useState(false);

  return (
    <PopUpContainer>
      <div className="flex-col items-start justify-start gap-2 w-full">
        <Practice
          title="Practice 3 - Modal with Transition"
          objective="Create a modal that opens with a slide-down effect."
          instructions={[
            <>Create a modal component using a <code>motion.div</code>.</>,
            "Style the modal using Tailwind CSS (e.g., background, border).",
            "Use motion to animate the modal's entrance and exit.",
            "Add a button to trigger the modal.",
          ]}
          extraContentBelow={
            <motion.div className="relative practice-container">
              <motion.div className="absolute top-5 w-[90%]">
                <AnimatePresence>
                  {show && (
                    <Modal
                      isShown={show}
                      setIsShown={setShow}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
              <button
                onClick={() => setShow((prevState) => !prevState)}
                className="button absolute bottom-[20%]"
              >
                { show ? "Hide" : "Show" }
              </button>
            </motion.div>
          }
        />
      </div>
    </PopUpContainer>
  );
}

const Modal = ({ isShown, setIsShown }: ModalProps) => {
  const modalContainerVariants: Variants = {
    hide: {
      y: "-100%",
      opacity: 0,
      transition:{
        ease: [0.42, 0, 0.58, 1],
        duration: .3,
        delay: .2,
      },
    },
    show: {
      y: 0,
      opacity: 1,
      transition:{
        ease: [0.42, 0, 0.58, 1],
        duration: .3,
      },
    },
  };

  return (
    <motion.div
      className="border rounded-lg p-4 bg-black/50"
      variants={modalContainerVariants}
      initial="hide"
      animate="show"
      exit="hide"
    >
      <div className="relative flex flex-col">
        <div className="flex items-start justify-between">
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-[0.9rem]">Practice 3</h4>
            <div className="relative w-fit pb-1">
              <h3 className="text-[1.1rem]">Modal with Transition</h3>
              <Underline />
            </div>
          </div>
          <div className="mt-2">
            <CloseBtn
              setIsShown={setIsShown}
            />
          </div>
        </div>
        <div className="py-10"/>
        <div className="flex w-full">
          <div className="flex-1" />
          <Banana className="text-accent" width={100} height={100} />
        </div>
      </div>
    </motion.div>
  );
};