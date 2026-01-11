'use client';

import { ChangeScreenIcon, GesturesIcon, KeyframesIcon, TransformationIcon, VariantsIcon } from '@/public/assets/assets';
import { createContext, useContext, useState, ReactNode } from 'react';

export type LinksProps = {
  href: string;
  label: string;
  icon: ReactNode;
};

interface MobileNavbarContextType {
  isMobileNavOpened: boolean;
  setIsMobileNavOpened: (value: boolean) => void;
  toggleMobileNav: () => void;
  links: LinksProps[];
}

const MobileNavbarContext = createContext<MobileNavbarContextType | undefined>(undefined);

export function MobileNavbarProvider({ children }: { children: ReactNode }) {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);

  const links: LinksProps[] = [
    { href: '/transformations', label: 'Transformations', icon: <TransformationIcon width={20} height={20} /> },
    { href: '/transitions', label: 'Transitions', icon: <ChangeScreenIcon width={20} height={20} /> },
    { href: '/keyframes', label: 'Keyframes', icon: <KeyframesIcon width={20} height={20} /> },
    { href: '/variants', label: 'Variants', icon: <VariantsIcon width={20} height={20} /> },
    { href: '/gestures', label: 'Gestures', icon: <GesturesIcon width={20} height={20} /> },
  ];

  const toggleMobileNav = () => {
    setIsMobileNavOpened(prev => !prev);
  };

  const value = {
    isMobileNavOpened,
    setIsMobileNavOpened,
    toggleMobileNav,
    links,
  };

  return (
    <MobileNavbarContext.Provider value={value}>
      {children}
    </MobileNavbarContext.Provider>
  );
}

export function useMobileNavbar() {
  const context = useContext(MobileNavbarContext);
  if (context === undefined) {
    throw new Error('useMobileNavbar must be used within a MobileNavbarProvider');
  }
  return context;
}