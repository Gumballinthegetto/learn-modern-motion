import type { Metadata } from "next";
import Lab1 from "./Lab1";

export const metadata: Metadata = {
  title: "Keyframes Lab 1 - Bouncing Ball",
  description: "Create a bouncing ball animation using keyframes.",
};

export default function KeyframesLab1() {
  return <Lab1 />;
}