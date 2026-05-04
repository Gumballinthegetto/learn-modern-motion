import Lab5 from "./Lab5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Lab 5 - Long Press to Change Size",
  description:
    "Implement long press detection and animate size transformations for enhanced user interactions.",
};

export default function GesturesLab5() {
  return <Lab5 />;
}