import Lab1 from "./Lab1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Lab 1 - Swipeable Cards",
  description: "Create cards that can be swiped left or right to the next card.",
};
export default function GesturesLab1() {
  return <Lab1 />;
}