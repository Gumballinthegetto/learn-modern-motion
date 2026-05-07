import type { Metadata } from "next";
import Lab3 from "./Lab3";

export const metadata: Metadata = {
  title: "Transitions Lab 3 - Modal with Transition",
  description: "Create a modal that opens with a slide-down effect.",
};

export default function TransitionsLab3() {
  return <Lab3 />;
}