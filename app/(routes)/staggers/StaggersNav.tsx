'use client';

import SectionNav from "@/components/SectionNav";
import { navigationConfig } from "@/config/navigation";

export default function StaggersNav() {
  return <SectionNav links={navigationConfig.staggers} />;
}