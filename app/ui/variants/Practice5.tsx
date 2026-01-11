'use client';

import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";
import { DeleteIcon } from "@/public/assets/assets";
import { AnimatePresence, motion, Variants } from 'motion/react';
import { useState } from 'react';

export default function Practice5() {
  const [items, setItems] = useState<number[]>([]);
  const [nextId, setNextId] = useState(1);

  const addItem = () => {
    setItems((prevItems) => [...prevItems, nextId]);
    setNextId((prevId) => prevId + 1);
  };

  const removeItem = (item: number) => {
    const found = items.find(i => i === item);

    if (!found) return;

    setItems((prev) => prev.filter(i => i !== item));
  };

  return (
    <PopUpContainer>
      <Practice
        title="Practice 5 - Dynamic List Animation"
        objective="Create a list that animates items when they are added or removed."
        instructions={[
          'Define variants for entering and exiting the list.',
          <>Create a dynamic list that uses <code>motion.div</code> for each item.</>,
          'Style the list with Tailwind CSS.',
        ]}
        navLinkType="variants"
        extraContentBelow={
          <div className="practice-container gap-6">
            {(items.length === 0) ? (
              <h2>No item. List is empty.</h2>
            ) : (
              <h2>There {items.length > 1 ? 'are' : 'is'} {items.length} {items.length > 1 ? 'items' : 'item'} in the list.</h2>
            )}
            <AnimatePresence>
              {items.map((item) =>
                <Item
                  key={item}
                  item={item}
                  onRemove={removeItem} />
              )}
            </AnimatePresence>
            <motion.button
              onClick={addItem}
              className="button"
            >
              Add Item
            </motion.button>
          </div>
        }
      />
    </PopUpContainer>
  );
}

const Item = ({
  item,
  onRemove
}: {
  item: number;
  onRemove: (item: number) => void;
}) => {
  const itemVariants: Variants = {
    initial: {
      opacity: 0,
      x: -10,
      y: 10,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="relative border rounded-md py-4 px-6"
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <p>Item number: {item} has been added.</p>
      <motion.button
        onClick={() => onRemove(item)}
        className="absolute -right-3 -top-3 cursor-pointer"
      >
        <DeleteIcon width={20} height={20} />
      </motion.button>
    </motion.div>
  );
};