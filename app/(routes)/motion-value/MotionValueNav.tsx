'use client';

import SectionNav from "@/components/SectionNav";
import { navigationConfig } from "@/config/navigation";

export default function MotionValueNav() {
  return <SectionNav links={navigationConfig.motionValue} />;
}
