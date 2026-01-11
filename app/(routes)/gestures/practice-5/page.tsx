import Practice5 from "@/app/ui/gestures/Practice5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Long Press to Change Size - Motion Practice",
  description:
    "Implement long press detection and animate size transformations for enhanced user interactions.",
};

export default function GesturesPractice5() {
  return <Practice5 />;
}