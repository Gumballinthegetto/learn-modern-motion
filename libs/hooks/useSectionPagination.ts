'use client';

import { usePathname, useRouter } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

export function useSectionPagination(links: NavLink[]) {
  const pathname = usePathname();
  const router = useRouter();

  const currentIndex = links.findIndex(link => link.href === pathname);

  const currentPage = currentIndex !== -1 ? currentIndex + 1 : 1;
  const totalPages = links.length;

  const goToNext = () => {
    if (currentIndex < links.length - 1) {
      router.push(links[currentIndex + 1].href);
    }
  };

  const goToPrev = () => {
    if (currentIndex  > 0) {
      router.push(links[currentIndex - 1].href);
    }
  };

  const goToPage = (index: number) => {
    if (index >= 0 && index < links.length) {
      router.push(links[index].href);
    }
  };

  return {
    currentPage,
    totalPages,
    currentIndex,
    currentLink: links[currentIndex],
    goToNext,
    goToPrev,
    goToPage,
    hasNext: currentIndex < links.length - 1,
    hasPrev: currentIndex > 0,
  };
}