import { navigationConfig } from "@/config/navigation";
import { SVGProps } from "react";

// Navigation
export type NavigationKey = keyof typeof navigationConfig;

export interface NavLink {
  href: string;
  label: string;
}

// Icons
export type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
}
