import Practice2 from "@/app/ui/gestures/Practice2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Draggable Box - Motion Practice",
  description:
    "Master drag functionality by creating a freely movable box element with Motion's intuitive drag API.",
};
export default function GesturesPractice2() {
  return <Practice2 />;
}