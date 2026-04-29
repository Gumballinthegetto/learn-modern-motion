import Practice2 from "./Practice2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "While In View Practice 2",
  description: "Learn to trigger animations when elements enter the viewport using whileInView.",
};

export default function WhileInViewPractice2Page() {
  return <Practice2 />;
}
