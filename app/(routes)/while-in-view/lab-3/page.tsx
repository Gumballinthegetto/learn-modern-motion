import Lab3 from "./Lab3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "While In View Lab 3",
  description: "Learn to trigger animations when elements enter the viewport using whileInView.",
};

export default function WhileInViewLab3Page() {
  return <Lab3 />;
}
