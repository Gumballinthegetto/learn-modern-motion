import Practice2 from "./Practice2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motion Values Practice 2 - Hover-Linked Scale",
  description:
    "Learn to programmatically update motion values using handleHover events for reactive UI scaling.",
};

export default function MotionValuePractice2Page() {
  return <Practice2 />;
}
