'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import Underline from "@/components/Underline";
import Banana from "@/public/assets/icons/banana";
import { cn } from "@/utils/cn";
import { DragHandler, motion, Variants } from 'motion/react';
import { useRef, useState } from "react";

type Card = {
  number: number;
  type: Type;
};

enum Type {
  Fruit = 'Fruit',
  Veggie = 'Veggie',
  Meat = 'Meat',
};

export default function Practice1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const constraintsRef = useRef(null);

  const cards: Card[] = [
    { number: 1, type: Type.Fruit },
    { number: 2, type: Type.Meat },
    { number: 3, type: Type.Veggie },
  ];

  const handleDragEnd: DragHandler = (event, info) => {
    const swipeThreshold = 80;

    if (info.offset.x > swipeThreshold && currentIndex > 0) {
      // swipe right - go to previous card
      setCurrentIndex(currentIndex - 1);
    } else if (info.offset.x < -swipeThreshold && currentIndex < cards.length - 1) {
      // swipe left - go to next card
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(currentIndex);
    }
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 1 - Swipeable Cards"
        objective="Create cards that can be swiped left or right to the next card."
        instructions={[
          <>Create a <code>motion.div</code> to represent the card.</>,
          <>Use <code>drag</code>, <code>dragConstraints</code>, and <code>onDragEnd</code> to swipe through cards.</>,
          <>Animate the card&apos; position based on the swipe.</>,
        ]}
        navLinkType="gestures"
        extraContentBelow={
          <div className="practice-container">
            <motion.div
              className="relative w-full h-[400px] flex items-center justify-center"
              ref={constraintsRef}
              style={{ width: '900px' }}
            >
              {cards.map((card, index) => {
                const offset = index - currentIndex;
                const isActive = index === currentIndex;

                return (
                  <Card
                    key={index}
                    card={card}
                    offset={offset}
                    isActive={isActive}
                    onDragEnd={handleDragEnd}
                  />
                )
              })}
            </motion.div>
          </div>
        }
      />
    </PopUpContainer>
  );
}

const Card = ({
  card,
  offset,
  isActive,
  onDragEnd,
}: {
  card: Card;
  offset: number;
  isActive: boolean;
  onDragEnd: DragHandler;
}) => {
  return (
    <motion.div
      className={cn(
        "absolute border rounded-md bg-black w-[18rem] h-[16rem] overflow-hidden",
        isActive ? "cursor-grab" : "cursor-default",
      )}
      initial={false}
      animate={{
        x: offset * 60, // offset cards horizontally for peeked effect
        scale: 1 - Math.abs(offset) * 0.1, // scale down cards that are further away,
        opacity: Math.abs(offset) <= 1 ? 1 : 0, // hide cards that are too far
        zIndex: 10 - Math.abs(offset), // stack cards properly
        rotateY: offset * -10, // slight 3d rotation
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      drag={ isActive ? "x" : false }
      dragConstraints={{ left: -50, right: 50, }}
      dragElastic={0.1}
      onDragEnd={onDragEnd}
      whileDrag={isActive ? {
        scale: 1.05,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.4)"
      } : {}}
    >
      <div className="border-b py-4 px-4 flex items-center justify-center">
        <Banana
          className="text-accent"
          width={26}
          height={26}
        />
      </div>
      <div className="flex flex-col items-center px-4 py-4">
        <h2 className="font-[500] text-[4rem]">No.{card.number}</h2>
        <div className="relative pb-1">
          <p>Type: {card.type}</p>
          <Underline className="w-[40%]" />
        </div>
      </div>
    </motion.div>
  );
};