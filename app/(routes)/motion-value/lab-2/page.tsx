import Lab2 from "./Lab2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motion Values Lab 2 - Hover-Linked Scale",
  description:
    "Learn to programmatically update motion values using handleHover events for reactive UI scaling.",
};

export default function MotionValueLab2Page() {
  return <Lab2 />;
}
