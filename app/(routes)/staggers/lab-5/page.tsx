import Lab5 from "./Lab5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staggers Lab 5 - Staggered Text Reveal",
  description: "Create a title where each letter animates into view with a staggered effect.",
};
export default function StaggersLab5() {
  return <Lab5 />;
}