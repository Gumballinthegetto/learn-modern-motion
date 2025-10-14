import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Transformations - Motion Practice",
  description: "Practice Motion transformation animations. Master scale, rotate, translate, and other transform properties for dynamic animations.",
};

export default function TransformationsPage() {
  redirect('/transformations/practice-1');
}