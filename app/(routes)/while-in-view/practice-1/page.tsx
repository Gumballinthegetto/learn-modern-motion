import Practice1 from "./Practice1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "While In View Practice 1",
  description: "Learn to trigger animations when elements enter the viewport using whileInView.",
};

export default function WhileInViewPractice1Page() {
  return <Practice1 />;
}
