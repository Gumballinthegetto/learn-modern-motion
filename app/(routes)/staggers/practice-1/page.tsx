import Practice1 from "./Practice1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staggers Practice 1 - Staggered List Items",
  description:
    "Learn to orchestrate sequential animations across multiple list elements using staggerChildren and delayChildren.",
};
export default function StaggersPractice1() {
  return <Practice1 />;
}