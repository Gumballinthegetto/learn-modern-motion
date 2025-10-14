import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Transitions - Motion Practice",
  description: "Practice Motion transition animations. Learn how to create smooth state changes and timing controls for your animations.",
};

export default function TransitionsPage() {
  return redirect('/transitions/practice-1');
}