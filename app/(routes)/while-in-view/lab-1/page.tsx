import Lab1 from "./Lab1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "While In View Lab 1",
  description: "Learn to trigger animations when elements enter the viewport using whileInView.",
};

export default function WhileInViewLab1Page() {
  return <Lab1 />;
}
