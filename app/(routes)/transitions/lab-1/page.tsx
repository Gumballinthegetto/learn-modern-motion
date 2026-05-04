import type { Metadata } from "next";
import Lab1 from "./Lab1";

export const metadata: Metadata = {
  title: "Transitions Lab 1 - Simple Fade In/Out Animation",
  description: "Practice basic transition animations with Motion. Learn fundamental transition properties and timing.",
};

export default function TransitionsLab1() {
  return <Lab1 />;
}