import type { Metadata } from "next";
import Lab6 from "./Lab6";

export const metadata: Metadata = {
  title: "Transitions Lab 6 - Notification Toast",
  description: "Create a notification toast that slides in from the top when triggered.",
};

export default function TransitionsLab6() {
  return <Lab6 />;
}