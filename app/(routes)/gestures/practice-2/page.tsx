import Practice2 from "./Practice2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Practice 2 - Draggable Box",
  description:
    "Master drag functionality by creating a freely movable box element with Motion's intuitive drag API.",
};
export default function GesturesPractice2() {
  return <Practice2 />;
}