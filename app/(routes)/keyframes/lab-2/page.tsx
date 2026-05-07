import type { Metadata } from "next";
import Lab2 from "./Lab2";

export const metadata: Metadata = {
  title: "Keyframes Lab 2 - Pulsating Effect",
  description: "Create a pulsating effect on a button using keyframes.",
};

export default function KeyframesLab2() {
  return <Lab2 />;
}