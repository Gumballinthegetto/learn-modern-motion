import Practice3 from "./Practice3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "While In View Practice 3",
  description: "Learn to trigger animations when elements enter the viewport using whileInView.",
};

export default function WhileInViewPractice3Page() {
  return <Practice3 />;
}
