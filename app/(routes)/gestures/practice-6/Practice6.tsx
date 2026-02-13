'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { UnsplashImage } from "@/libs/unsplash";
import { cn } from "@/utils/cn";
import { AnimatePresence, DragHandler, motion, Variants } from 'motion/react';
import Image from "next/image";
import { useState } from "react";

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

  const itemVariants: Variants = {
    initial: {
      y: 50,
      opacity: 0,
      transition: {
        opacity: {
          duration: .1,
        },
        y: {
          duration: .3,
        },
        ease: 'easeInOut',
      },
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        opacity: {
          duration: .1,
        },
        y: {
          duration: .3,
        },
        ease: 'easeInOut',
      },
    },
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
              <AnimatePresence>
                <motion.div
                  key={items[currentIndex].id}
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center gap-4",
                    "cursor-grab",
                  )}
                  variants={itemVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  drag="y"
                  dragConstraints={{ top: -50, bottom: 50 }}
                  dragElastic={0.1}
                  onDragEnd={handleOnDragEnd}
                  whileDrag={{
                    scale: 1.05,
                  }}
                >
                  <div className="relative w-full h-[400px]"> {/* Container for Image */}
                    <Image
                      src={items[currentIndex].urls.regular}
                      alt={items[currentIndex].alt_description || 'Gallery image'}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 400px"
                      draggable={false}
                      loading="eager"
                    />
                  </div>
                  <p className="text-center text-sm">{items[currentIndex].alt_description}</p>
                  <div className="relative flex justify-end w-full">
                    <p><span className="text-accent">{currentIndex + 1}</span>/{items.length}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        }
      />
    </PopUpContainer>
  );
}