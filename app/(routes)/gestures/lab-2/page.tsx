import Lab2 from "./Lab2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Lab 2 - Draggable Box",
  description:
    "Master drag functionality by creating a freely movable box element with Motion's intuitive drag API.",
};
export default function GesturesLab2() {
  return <Lab2 />;
}