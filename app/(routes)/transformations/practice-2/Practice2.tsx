'use client';

import Practice from '@/components/Practice';
import PopUpContainer from '@/components/PopUpContainer';
import { motion, Variants } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/utils/cn';

export default function Practice2() {
  const [animate, setAnimate] = useState(false);

  const containerVariants: Variants = {
    initial: {
      y: 0,
    },
    animate: {
      y: '-100%',
      transition: {
        ease: 'easeInOut',
        duration: .5,
      },
    },
  };

  return (
    <PopUpContainer>
      <Practice
       title='Pratice 2 - Vertical Movement'
       objective='Make a circle bounce up and down.'
       instructions={[
        'Create a circle using CSS.',
        'Animate the circle to move vertically, bouncing at the top of the container.'
       ]}
       navLinkType='transformations'
       extraContentBelow={
        <div className='practice-container'>
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate={ animate ? "animate" : "initial" }
            className='w-[120px] h-[120px] rounded-full bg-accent'
            onAnimationComplete={() => setAnimate(false)}
          />
          <motion.button
            onClick={() => setAnimate(true)}
            className={cn(
              'button',
              animate ? 'cursor-not-allowed opacity-50' : '',
            )}
          >
              Animate
          </motion.button>
        </div>
       }
      />
    </PopUpContainer>
  );
}