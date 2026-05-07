import type { Metadata } from "next";
import Lab1 from "./Lab1";

export const metadata: Metadata = {
  title: "Transitions Lab 1 - Simple Fade In/Out Animation",
  description: "Create a component that fades in when it mounts and fades out when it unmounts.",
};

export default function TransitionsLab1() {
  return <Lab1 />;
}