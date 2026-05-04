import Lab5 from "./Lab5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "While In View Lab 5",
  description: "Learn to trigger animations when elements enter the viewport using whileInView.",
};

export default function WhileInViewLab5Page() {
  return <Lab5 />;
}
