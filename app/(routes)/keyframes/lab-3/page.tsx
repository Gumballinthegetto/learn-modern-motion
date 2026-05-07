import type { Metadata } from "next";
import Lab3 from "./Lab3";

export const metadata: Metadata = {
  title: "Keyframes Lab 3 - Color Change Animation",
  description: "Create a component that changes color using keyframes.",
};

export default function KeyframesLab3() {
  return <Lab3 />;
}