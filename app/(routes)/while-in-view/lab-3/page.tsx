import Lab3 from "./Lab3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "While In View Lab 3 - Complex Timeline Animation",
  description: "Create a sequence of animations that occurs when a section comes into view, including rotation, scaling, and fading.",
};

export default function WhileInViewLab3Page() {
  return <Lab3 />;
}
