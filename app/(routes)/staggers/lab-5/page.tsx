import Lab5 from "./Lab5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staggers Lab 5 - Staggered Text Reveal",
  description:
    "Explore granular stagger control by animating individual characters within a string for high-impact typography reveals.",
};
export default function StaggersLab5() {
  return <Lab5 />;
}