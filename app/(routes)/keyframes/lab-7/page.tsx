import type { Metadata } from "next";
import Lab7 from "./Lab7";

export const metadata: Metadata = {
  title: "Keyframes Lab 7 - Background Animation",
  description: "Create a background that changes color using keyframes.",
};

export default function KeyframesLab7() {
  return <Lab7 />;
}