'use client';

import HamburgerMenu from "./HamburgerMenu";
import Banana from "@/public/assets/icons/banana";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState } from "react";
import Underline from "../Underline";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useMobileNavbar } from "@/provider/MobileNavbarProvider";

export default function Navbar() {
  const { isMobileNavOpened, setIsMobileNavOpened, toggleMobileNav, links } = useMobileNavbar();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  // Use useMotionValueEvent for better performance
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 w-full py-6 z-[99]"
      animate={{
        backgroundColor: isScrolled ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0)',
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <nav className="relative">
        <div className="flex items-center justify-between relative w-[90%] mx-auto">
          <div className="flex items-center justify-start w-full">
            <Link
              onClick={() => setIsMobileNavOpened(false)}
              href="/"
              className="flex items-center justify-center gap-2"
            >
              <Banana
                width={22}
                height={22}
                fill="#ffe66d"
              />
              <h1>Nanas Corp.</h1>
            </Link>
            <button
              onClick={toggleMobileNav}
              className="absolute right-0 z-[99] sm:hidden"
            >
              <HamburgerMenu />
            </button>
          </div>
          <div className="hidden sm:flex sm:justify-end sm:w-full">
            <ul className="flex items-center justify-center gap-4">
              {links.map(({ href, label }) => (
                <motion.li
                  key={href}
                  whileHover={(pathname !== href && !pathname.startsWith(`${href}/`)) ? {
                    color: '#ffe66d',
                    y: -2,
                  } : undefined}
                >
                  <Link
                    className="relative flex flex-col py-1"
                    href={href}
                  >
                    <span>{label}</span>
                    {(pathname === href || pathname.startsWith(`${href}/`)) && (
                      <Underline />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/** Mobile Nav */}
      <AnimatePresence>
        {isMobileNavOpened &&
          <MobileNav
            links={links}
            setIsMobileNavOpened={toggleMobileNav}
          />
        }
      </AnimatePresence>
    </motion.div>
  );
}