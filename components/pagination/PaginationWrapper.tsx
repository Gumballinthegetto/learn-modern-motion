'use client';

import { navigationConfig } from "@/config/navigation";
import { SectionPagination } from "./SectionPagination";
import { NavigationKey } from "@/types/types";

interface PaginationWrapperProps {
  variant?: NavigationKey;
  links?: { href: string; label: string }[];
  children: React.ReactNode;
}

export function PaginationWrapper({
  variant = "transformations",
  links,
  children,
}: PaginationWrapperProps) {
  const resolvedLinks = links ?? navigationConfig[variant];

  return (
    <>
      {children}
      <SectionPagination
        className="md:hidden"
        links={resolvedLinks}
      />
    </>
  );
}