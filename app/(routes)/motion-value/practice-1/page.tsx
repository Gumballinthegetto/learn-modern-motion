import Practice1 from "./Practice1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motion Values Practice 1 - Draggable Box",
  description:
    "Learn to use useMotionValue to track and display the real-time position of draggable elements.",
};

export default function MotionValuePractice1Page() {
  return <Practice1 />;
}
