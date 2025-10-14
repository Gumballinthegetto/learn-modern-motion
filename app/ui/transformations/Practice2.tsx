'use client';

import Practice from '@/components/Practice';
import PopUpContainer from '@/components/PopUpContainer';
import { motion, Variants } from 'motion/react';
import { useState } from 'react';

export default function Practice2() {
  const [animate, setAnimate] = useState(false);

  const containerVariants: Variants = {
    initial: {
      y: 0,
    },
    animate: {
      y: [0, '-100%', 0],
      transition: {
        ease: 'easeInOut',
        duration: .5,
        repeat: 2,
        repeatType: 'reverse',
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
       extraContentBelow={
        <div className='practice-container'>
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate={ animate ? "animate" : "initial" }
            className='w-[120px] h-[120px] rounded-full bg-accent'
            onAnimationComplete={() => setAnimate(false)}
          />
          <button onClick={() => setAnimate(true)} className='button'>Animate</button>
        </div>
       }
      />
    </PopUpContainer>
  );
}