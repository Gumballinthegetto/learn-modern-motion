'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Lab from "@/components/Lab";
import { cn } from "@/utils/cn";
import { DragHandler, motion, Variants } from 'motion/react';
import { useRef, useState } from "react";

export default function Lab3() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  const handleDrag: DragHandler = (event, info) => {
     // Get the center of the constraints container
    const containerRect = constraintsRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    const centerX = containerRect.left + containerRect.width / 2;
    const centerY = containerRect.top + containerRect.height / 2;

    // Calculate angle from center to cursor position
    const dx = info.point.x - centerX;
    const dy = info.point.y - centerY;

    const rotationAngle = Math.atan2(dy, dx) * (180 / Math.PI);
    setRotation(rotationAngle);
  };

  return (
    <PopUpContainer>
      <Lab
        title="Lab 3 - Rotate on Drag"
        objective="Create a box that rotates when being dragged."
        instructions={[
          <>Create a <code>motion.div</code> to represent the box.</>,
          <>Use the <code>onDrag</code> event to calculate the rotation angle.</>,
          'Use Tailwind CSS for styling the component.',
        ]}
        navLinkType="variants"
        extraContentBelow={
          <div className="lab-container" ref={constraintsRef}>
            <motion.div
              className={cn(
                "rounded-md w-[120px] h-[120px] bg-accent",
                "cursor-grab"
              )}
              drag
              dragElastic={0.1}
              dragSnapToOrigin
              dragConstraints={constraintsRef}
              onDrag={handleDrag}
              animate={{ rotate: rotation }}
              transition={{
                type: "spring",
                stiffness: 290,
                damping: 15,
                mass: 2,
              }}
            />
          </div>
        }
      />
    </PopUpContainer>
  );
}