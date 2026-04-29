'use client';

import SectionNav from "@/components/SectionNav";
import { navigationConfig } from "@/config/navigation";

export default function WhileInViewNav() {
  return <SectionNav links={navigationConfig.whileInView} />;
}
