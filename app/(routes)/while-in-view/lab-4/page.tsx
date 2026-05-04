import Lab4 from "./Lab4";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "While In View Lab 4",
  description: "Learn to trigger animations when elements enter the viewport using whileInView.",
};

export default function WhileInViewLab4Page() {
  return <Lab4 />;
}
