import Lab5 from "./Lab5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Lab 5 - Long Press to Change Size",
  description: "Create a box that changes its size when long-pressed.",
};

export default function GesturesLab5() {
  return <Lab5 />;
}