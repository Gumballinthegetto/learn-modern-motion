'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Lab from "@/components/Lab";
import { motion } from "motion/react";
import { MouseScrollIcon } from "@/public/assets/icons";
import Image from "next/image";
import { UnsplashImage } from "@/libs/unsplash";
import Underline from "@/components/Underline";
import { useState } from "react";

export default function Lab2({ image }: { image: UnsplashImage }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <PopUpContainer>
      <Lab
        title="Lab 2 - Card Flip Animation"
        objective="Create a card that flips when it comes into view, revealing its back side."
        instructions={[
          'Create a card component with a front and back side.',
          <>Use <code>whileInView</code> to animate the rotation along the Y-axis.</>,
          'Style with Tailwind CSS.',
        ]}
        navLinkType="whileInView"
        extraContentBelow={
          <div className="lab-container px-4">
            <div className="h-[50vh] flex flex-col items-center justify-start gap-4">
              <div className="flex items-center justify-center pt-10 gap-4">
                <MouseScrollIcon className="w-7 h-7" />
                <p className="text-base font-semibold text-white">Scroll down to see the animation</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-full min-h-[60vh] perspective-1000">
              <motion.div
                className="relative w-full max-w-md aspect-3/4 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                initial={false}
                whileInView={{ rotateY: isFlipped ? 180 : 0 }}
                onClick={handleClick}
                onViewportEnter={() => setIsFlipped(true)}
                onViewportLeave={() => setIsFlipped(false)}
                viewport={{ amount: .2, once: false }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {/* Front Side */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl flex flex-col bg-black/50"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="relative w-full h-[50%]">
                    <Image
                      src={image.urls.regular}
                      alt={image.alt_description ?? "Card Image"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                    <p className="text-sm text-white/50 uppercase tracking-widest mb-2">Photographer</p>
                    <div className="relative overflow-hidden pb-1">
                      <p className="text-3xl font-bold text-white tracking-tight">{image.user.name}</p>
                      <Underline className="h-1 w-[45%] origin-left" />
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className="flex flex-col items-center justify-center gap-6 absolute inset-0 w-full h-full bg-neutral-900 rounded-2xl border-2 border-white/20 shadow-2xl p-8 text-center"
                  style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                >
                  <h3 className="text-[1.8rem] font-bold text-white">I got flipped!</h3>
                  <button 
                    onClick={handleClick}
                    className="px-5 py-2 rounded-md outline-none bg-foreground text-secondary font-medium cursor-pointer hover:scale-110 transition-all ease-in-out duration-200"
                  >
                    Go back
                  </button>
                </div>
              </motion.div>
            </div>
          </div>  
        }
      />
    </PopUpContainer>
  );
}
