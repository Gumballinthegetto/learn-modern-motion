import Lab2 from "./Lab2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "While In View Lab 2",
  description: "Learn to trigger animations when elements enter the viewport using whileInView.",
};

export default function WhileInViewLab2Page() {
  return <Lab2 />;
}
