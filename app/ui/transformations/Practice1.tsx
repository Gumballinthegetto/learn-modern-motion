'use client';

import PopUpContainer from '@/components/PopUpContainer';
import Practice from '@/components/Practice';
import { motion, Variants } from 'motion/react';
import { useState } from 'react';

export default function Practice1() {
  const [animate, setAnimate] = useState(false);

  const containerVariant: Variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: '100%',
      transition: {
        type: 'spring',
        duration: .6,
      },
    },
  };

  return (
    <PopUpContainer>
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        <Practice
          title="Practice 1 - Basic Translation"
          objective="Create a box that moves across the screen."
          instructions={[
            <>Create a simple box using a <code>div</code>.</>,
            'Use Motion to animate the box from left to right.',
          ]}
          navLinkType='transformations'
          extraContentBelow={
            <div className='practice-container'>
              <motion.div
                variants={containerVariant}
                initial="initial"
                animate={ animate ? 'animate' : 'initial' }
                onAnimationComplete={() => setAnimate(false)}
                className='w-[120px] h-[120px] bg-accent rounded-lg shadow-sm'
              />
              <button onClick={() => setAnimate(true)} className='button'>Animate</button>
            </div>
          }
        />
      </div>
    </PopUpContainer>
  );
}