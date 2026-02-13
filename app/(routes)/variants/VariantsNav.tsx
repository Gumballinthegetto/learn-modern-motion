'use client';

import SectionNav from "@/components/SectionNav";
import { navigationConfig } from "@/config/navigation";

export default function VariantsNav() {
  return <SectionNav links={navigationConfig.variants} />
}