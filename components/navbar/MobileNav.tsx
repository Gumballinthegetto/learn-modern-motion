'use client';

import { motion, stagger, Variants } from "motion/react";
import Link from "next/link";
import { ReactNode } from "react";

type MobileNavProps = {
  links: { href: string; label: string; icon: ReactNode; }[];
  isMobileNavOpened: boolean;
  setIsMobileNavOpened: () => void;
};

export default function MobileNav({ links, isMobileNavOpened, setIsMobileNavOpened }: MobileNavProps) {
  const panelVariants: Variants = {
    closed: {
      transition: {
        ease: 'easeInOut',
        delay: .4,
        when: "afterChildren",
        delayChildren: stagger(.1, { from: 'last' }),
      }
    },
    opened: {
      transition: {
        duration: .3,
        ease: 'easeInOut',
        delayChildren: stagger(.1, { from: 'first' }),
      },
    },
  };

  const overlayVariants: Variants = {
    closed: { opacity: 0 },
    opened: { opacity: 1 },
  };

  const itemsVariants: Variants = {
    closed: {
      opacity: 0,
      x: -5,
    },
    opened: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="fixed inset-0 z-[98] sm:hidden">
      <motion.div
        variants={overlayVariants}
        initial="closed"
        animate={isMobileNavOpened ? "opened" : "closed"}
        onClick={setIsMobileNavOpened}
        className="absolute inset-0 bg-black/90"
        transition={{ ease: 'easeInOut' }}
      />

      <motion.nav
        variants={panelVariants}
        initial="closed"
        animate={isMobileNavOpened ? "opened" : "closed"}
        exit="closed"
        className="absolute left-0 right-0 bottom-0 top-16 origin-top"
      >
        <ul className="flex flex-col items-start justify-center">
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
        </ul>
      </motion.nav>
    </div>
  );
}