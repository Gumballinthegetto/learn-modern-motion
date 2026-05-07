import type { Metadata } from "next";
import Lab5 from "./Lab5";

export const metadata: Metadata = {
  title: "Transitions Lab 5 - Accordion Component",
  description: "Create an accordion component that expands and collapes on click.",
};

export default function TransitionsLab5() {
  return <Lab5 />;
}