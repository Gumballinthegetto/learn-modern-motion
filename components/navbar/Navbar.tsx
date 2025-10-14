'use client';

import HamburgerMenu from "./HamburgerMenu";
import Banana from "@/public/assets/icons/banana";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "motion/react";
import Underline from "../Underline";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useMobileNavbar } from "@/provider/MobileNavbarProvider";

export default function Navbar() {
  const { isMobileNavOpened, setIsMobileNavOpened, toggleMobileNav, links } = useMobileNavbar();
  const pathname = usePathname();

  const { scrollY } = useScroll();
  // Smooth the scroll value with a spring, then map to color
  const smoothedY = useSpring(scrollY, { stiffness: 80, damping: 26, mass: 1 });
  const backgroundColor = useTransform(
    smoothedY,
    [0, 40],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']
  );

  return (
    <motion.div
      style={{ backgroundColor }}
      className="fixed left-0 right-0 top-0 w-full py-6 z-[99]">
      <nav className="relative">
        <div className="flex items-center justify-between relative w-[90%] mx-auto">
          <div className="flex items-center justify-start w-full">
            <Link
              onClick={() => setIsMobileNavOpened(false)}
              href="/" className="flex items-center justify-center gap-2">
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

      <AnimatePresence>
        {isMobileNavOpened &&
          <MobileNav
            links={links}
            isMobileNavOpened={isMobileNavOpened}
            setIsMobileNavOpened={toggleMobileNav}
          />
        }
      </AnimatePresence>
    </motion.div>
  );
}