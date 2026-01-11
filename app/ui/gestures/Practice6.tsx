'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { cn } from "@/utils/cn";
import { DragHandler, motion, Variants } from 'motion/react';
import Image from "next/image";
import { useState } from "react";

interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
  };
};

interface Practice6Props {
  images: UnsplashImage[];
};

export default function Practice6({ images }: Practice6Props) {
  const [items, setItems] = useState<UnsplashImage[]>(images);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnDragEnd: DragHandler = (event, info) => {
    const swipeThreshold = 50;

    if (info.offset.y < -swipeThreshold && currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1); // move to next image
    } else if (info.offset.y > swipeThreshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // move to previous image
    } else {
      setCurrentIndex(currentIndex);
    }
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 6 - Gesture-Based Image Gallery"
        objective="Create an image gallery that can be navigated vertically."
        instructions={[
          <>Create a <code>motion.div</code> for the gallery that contains the images.</>,
          'Implement swipe gestures to navigate between images vertically (up and down).',
          'Use Tailwind CSS for styling the component.',
        ]}
        navLinkType="gestures"
        extraContentBelow={
          <div className="practice-container px-6">
            <div
              className="relative w-full h-[500px] overflow-hidden"
            >
              {items.map((item, index) => {
                const offset = index - currentIndex;
                const isActive = index === currentIndex;

                return (
                  <motion.div
                    key={item.id}
                    className={cn(
                      "absolute top-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center gap-4",
                      isActive ? "cursor-grab" : "cursor-default",
                    )}
                    initial={false}
                    animate={{
                      y: offset * 500, // distance between each images
                      scale: 1 - Math.abs(offset) * 0.1, // slighly scale down each images
                      zIndex: 10 - Math.abs(offset), // stack images properly
                      rotateY: offset * -10,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                    drag={ isActive ? "y" : false }
                    dragConstraints={{ top: -50, bottom: 50 }}
                    dragElastic={0.1}
                    onDragEnd={handleOnDragEnd}
                    whileDrag={isActive ? {
                      scale: 1.05,
                    } : {}}
                  >
                    <div className="relative w-full h-[400px]"> {/* Container for Image */}
                      <Image
                        src={item.urls.regular}
                        alt={item.alt_description || 'Gallery image'}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, 400px"
                        draggable={false}
                        loading="eager"
                      />
                    </div>
                    <p className="text-center text-sm">{item.alt_description}</p>
                    <div className="relative flex justify-end w-full">
                      <p><span className="text-accent">{index + 1}</span>/{items.length}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        }
      />
    </PopUpContainer>
  );
}