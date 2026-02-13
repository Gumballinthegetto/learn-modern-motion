'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import Underline from "@/components/Underline";
import { PlusIcon } from "@/public/assets/assets";
import Banana from "@/public/assets/icons/banana";
import { motion, Variants } from "motion/react";
import { Dispatch, SetStateAction, useState } from "react";

type AccordionProps = {
  title: string;
  content: string;
  index: number;
  isOpen: boolean;
  setIsOpenIndex: Dispatch<SetStateAction<number | null>>;
};

const accordionItems = [
  {
    title: "Motion Values",
    content: "Motion values are reactive values that can be animated and transformed. They're perfect for creating smooth animations that respond to user interactions like scrolling or dragging."
  },
  {
    title: "Variants",
    content: "Variants allow you to define animation states in a declarative way. They help organize animations and enable orchestrated animations between parent and child components."
  },
  {
    title: "Transitions",
    content: "Transitions control how animations move from one state to another. You can customize duration, easing, delay, and more to create the perfect animation timing."
  },
  {
    title: "Layout Animations",
    content: "Layout animations automatically animate components when their layout changes. Motion detects position and size changes and smoothly animates between them."
  },
  {
    title: "Gesture Animations",
    content: "Gesture animations respond to user interactions like hover, tap, drag, and pan. They make your UI feel responsive and interactive with smooth feedback."
  }
];

export default function Practice5() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <PopUpContainer>
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        <Practice
          title="Practice 5 - Accordion Component"
          objective="Create an accordion component that expands and collapes on click."
          instructions={[
            "Create a component that renders a list of items, each with a title and content.",
            <>Use <code>motion.div</code> to animate the height of the content.</>,
            "Use Tailwind CSS for styling the titles and content.",
          ]}
          navLinkType="transitions"
          extraContentBelow={
            <motion.div className="practice-container gap-10">
              <div className="relative flex flex-col items-center gap-4 justify-center">
                <Banana className="text-accent" width={50} height={50} />
                <div className="flex flex-col items-center justify-center">
                  <p>Practice 5</p>
                  <div className="relative">
                    <h2 className="text-[1.3rem]">Accordion Component</h2>
                    <Underline />
                  </div>
                </div>
              </div>
              <motion.ul className="flex flex-col w-full px-6">
                {accordionItems.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <Accordion
                      key={index}
                      title={item.title}
                      content={item.content}
                      index={index}
                      isOpen={isOpen}
                      setIsOpenIndex={setOpenIndex}
                    />
                  );
                }
                )}
              </motion.ul>
            </motion.div>
          }
        />
      </div>
    </PopUpContainer>
  );
}

const Accordion = ({ title, content, index, isOpen, setIsOpenIndex }: AccordionProps) => {
  const itemVariants: Variants = {
    close: {
      opacity: 0,
      height: 0,
      overflow: "hidden",
    },
    open: {
      opacity: 1,
      height: "auto",
      overflow: "visible",
    },
  };

  const buttonVariants: Variants = {
    close: {
      rotate: "-45deg",
    },
    open: {
      rotate: 0,
    },
  };

  return (
    <div className="flex flex-col justify-center gap-2 border-t border-[#dddddd] py-6 w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-[1.2rem]">{title}</h3>
        <motion.button
          className="cursor-pointer"
          variants={buttonVariants}
          animate={ isOpen ? "open" : "close" }
          onClick={() => setIsOpenIndex(isOpen ? null : index)}
        >
          <PlusIcon
            width={30}
            height={30}
          />
        </motion.button>
      </div>
      <motion.div
        variants={itemVariants}
        animate={ isOpen ? "open" : "close" }
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <p className="text-base">{content}</p>
      </motion.div>
    </div>
  );
};