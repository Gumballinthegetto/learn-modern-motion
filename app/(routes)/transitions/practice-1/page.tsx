import type { Metadata } from "next";
import Practice1 from "@/app/ui/transitions/Practice1";

export const metadata: Metadata = {
  title: "Transitions Practice 1 - Simple Fade In/Out Animation",
  description: "Practice basic transition animations with Motion. Learn fundamental transition properties and timing.",
};

export default function TransitionsPractice1() {
  return <Practice1 />;
}