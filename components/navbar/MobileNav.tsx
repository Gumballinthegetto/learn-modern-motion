'use client';

import { motion, stagger, Variants } from "motion/react";
import Link from "next/link";
import { ReactNode } from "react";

type MobileNavProps = {
  links: { href: string; label: string; icon: ReactNode; }[];
  setIsMobileNavOpened: () => void;
};

export default function MobileNav({ links, setIsMobileNavOpened }: MobileNavProps) {
  const panelVariants: Variants = {
    close: {
      transition: {
        when: "afterChildren",
        delay: .3,
      }
    },
    open: {
      transition: {
        when: "beforeChildren",
      },
    },
  };

  const overlayVariants: Variants = {
    close: {
      opacity: 0,
      transition: {
        delay: .4,
      }
    },
    open: {
      opacity: 1,
    },
  };

  const listVariants: Variants = {
    close: {
      transition: {
        delayChildren: stagger(.1, { from: 'last', ease: 'easeInOut' }),
      }
    },
    open: {
      transition: {
        delayChildren: stagger(.1, { from: 'first', ease: 'easeInOut' }),
      },
    },
  };

  const itemsVariants: Variants = {
    close: {
      opacity: 0,
      x: -5,
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div
      className="fixed inset-0 z-[98] sm:hidden"
    >
      <motion.div
        variants={overlayVariants}
        initial="close"
        animate="open"
        exit="close"
        onClick={setIsMobileNavOpened}
        className="absolute inset-0 bg-black/90"
        transition={{ duration: .3, ease: 'easeInOut' }}
      />

      <motion.nav
        variants={panelVariants}
        initial="close"
        animate="open"
        exit="close"
        className="absolute left-0 right-0 bottom-0 top-16 origin-top"
        transition={{ duration: .3, ease: 'easeInOut' }}
      >
        <motion.ul
          variants={listVariants}
          className="flex flex-col items-start justify-center"
        >
          {links.map(({ href, label, icon }) => (
            <motion.li
                variants={itemsVariants}
                key={href}
                className="w-full border-b py-6 px-8"
              >
              <Link
                onClick={setIsMobileNavOpened} href={href}
              >
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{
                    color: '#ffe66d',
                    scaleX: 1.05,
                    x: 20,
                  }}
                >
                  {icon}
                  <span>{label}</span>
                </motion.div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </div>
  );
}