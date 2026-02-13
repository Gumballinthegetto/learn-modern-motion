import Practice5 from "./Practice5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Practice 5 - Long Press to Change Size",
  description:
    "Implement long press detection and animate size transformations for enhanced user interactions.",
};

export default function GesturesPractice5() {
  return <Practice5 />;
}