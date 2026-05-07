import type { Metadata } from "next";
import Lab2 from "./Lab2";

export const metadata: Metadata = {
  title: "Transitions Lab 2 - Slide In from the Right",
  description: "Create a sidebar that slides in from the Right when a button is clicked.",
};

export default function TransitionsLab2() {
  return <Lab2 />;
}