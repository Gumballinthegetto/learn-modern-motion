'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Underline from "@/components/Underline";

interface NavLink {
  href: string;
  label: string;
}

interface SectionNavProps {
  links: NavLink[];
}

export default function SectionNav({ links }: SectionNavProps) {
  const pathname = usePathname();

  return (
    <nav className="py-4 px-6 border rounded-lg">
      <ul className="flex flex-wrap items-center justify-center gap-4 text-sm">
        {links.map(({ href, label }) => (
          <li className="relative pb-1" key={href}>
            <Link href={href}>{label}</Link>
            {pathname === href && <Underline />}
          </li>
        ))}
      </ul>
    </nav>
  );
}
