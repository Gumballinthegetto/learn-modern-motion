'use client';

import PopUpContainer from "@/components/PopUpContainer";
import { motion, useMotionValue, Variants } from "motion/react";
import Practice from "@/components/Practice";
import { useState } from "react";

type FadeComponentProps = {
  isShown: boolean;
};

export default function Practice1() {
  const [show, setShow] = useState(false);

  return (
    <PopUpContainer>
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        <Practice
          title="Practice 1 - Simple Fade In/Out Animation"
          objective="Create a component that fades in when it mounts and fades out when it unmounts."
          instructions={[
            <>Create a component called <code>FadeComponent</code>.</>,
            <>Use the <code>motion.div</code> from Motion to create a div that fades in and out.</>,
            <>Use Tailwind CSS classes to style the div(e.g., padding, background color).</>,
            <>Add a button to toggle the visibility of <code>FadeComponent</code>.</>,
          ]}
          navLinkType="transitions"
          extraContentBelow={
            <div className="practice-container">
              <FadeComponent isShown={show} />
              <button className="button" onClick={() => setShow((prevState) => !prevState)}>{ show ? "Hide" : "Show" }</button>
            </div>
          }
        />
      </div>
    </PopUpContainer>
  );
}

const FadeComponent = ({ isShown }: FadeComponentProps) => {
  const backgroundColor = useMotionValue("");

  const containerVariants: Variants = {
    show: {
      y: 0,
      opacity: 1,
      backgroundColor: "#ffe66d",
    },
    hide: {
      y: 10,
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hide"
      animate={ isShown ? "show" : "hide" }
      style={{
        backgroundColor,
      }}
      className="w-[120px] h-[120px] rounded-lg shadow-sm"
    />
  );
};