import Lab1 from "./Lab1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staggers Lab 1 - Staggered List Items",
  description:
    "Learn to orchestrate sequential animations across multiple list elements using staggerChildren and delayChildren.",
};
export default function StaggersLab1() {
  return <Lab1 />;
}