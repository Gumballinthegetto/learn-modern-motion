'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Lab from "@/components/Lab";
import { UnsplashImage } from "@/libs/unsplash";
import { useState } from "react";
import { motion, stagger, Variants } from "motion/react";
import { cn } from "@/utils/cn";
import Underline from "@/components/Underline";

interface Lab2Props {
  images: UnsplashImage[];
};

export default function Lab2({ images }: Lab2Props) {
  const [items, setItems] = useState<UnsplashImage[] | null>(images);

  const containerVariants: Variants = {
    initial: {
    },
    animate: {
      transition: {
        duration: .3,
        delayChildren: stagger(.5, {
          ease: "easeInOut",
        }),
      },
    },
  };

  const itemsVariants: Variants = {
    initial: {
      y: 40,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <PopUpContainer>
      <Lab
        title="Lab 2 - Stagger Image Gallery"
        objective="Create an image gallery where images fade in with staggered effect when loaded."
        instructions={[
          'Create an array of image URLs.',
          <>Use <code>motion.img</code> to display each image.</>,
          'Implement a staggered effect for images to fade in as they load.',
        ]}
        navLinkType="staggers"
        extraContentBelow={
          <div className="lab-container">
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-4 w-full h-[65vh] px-2 overflow-y-auto"
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ amount: .2, once: true }}
            >
              {items?.map((image, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "relative rounded-lg py-4",
                    index % 3 === 0 && "w-[90%]",
                    index % 3 === 1 && "w-[45%] aspect-square",
                    index % 3 === 2 && "w-[45%] aspect-square",
                  )}
                  variants={itemsVariants}
                  transition={{
                    duration: .4,
                    ease: "easeInOut",
                  }}
                >
                  <motion.img
                    src={image.urls.regular}
                    alt={image.alt_description ?? `Gallery Image ${index + 1}`}
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="mt-3">
                    <div className="pb-1">
                      <p className="text-xs text-white">{image.alt_description}</p>
                    </div>
                    <Underline className="w-[10%]" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        }
      />
    </PopUpContainer>
  );
}