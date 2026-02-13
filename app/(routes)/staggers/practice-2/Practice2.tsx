'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { UnsplashImage } from "@/libs/unsplash";
import { useState } from "react";

interface Practice2Props {
  images: UnsplashImage[];
};

export default function Practice2({ images }: Practice2Props) {
  const [items, setItems] = useState<UnsplashImage[] | null>(images);

  return (
    <PopUpContainer>
      <Practice
        title="Practice 2 - Stagger Image Gallery"
        objective="Create an image gallery where images fade in with staggered effect when loaded."
        instructions={[
          'Create an array of image URLs.',
          <>Use <code>motion.img</code> to display each image.</>,
          'Implement a staggered effect for images to fade in as they load.',
        ]}
        navLinkType="staggers"
        extraContentBelow={
          <div className="practice-container">
            <div>
              
            </div>
            <div className="flex items-center justify-between">
              
            </div>
          </div>
        }
      />
    </PopUpContainer>
  );
}