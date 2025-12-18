'use client';

import SectionNav from "@/components/SectionNav";
import { navigationConfig } from "@/config/navigation";

export default function KeyframesNav() {
  return <SectionNav links={navigationConfig.keyframes} />
}