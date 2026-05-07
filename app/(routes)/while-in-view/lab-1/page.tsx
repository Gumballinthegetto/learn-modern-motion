import Lab1 from "./Lab1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "While In View Lab 1 - Staggered Fade and Slide In",
  description: "Create a list of items that fade and slide in staggered when they come into view.",
};

export default function WhileInViewLab1Page() {
  return <Lab1 />;
}
