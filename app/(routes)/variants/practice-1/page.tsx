import Practice1 from "@/app/ui/variants/Practice1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Variants Practice 1 - Simple Fade-In Component",
  description:
    "Create a component that fades in when it appears using Motion variants and Tailwind CSS styling.",
};

export default function VariantsPractice1() {
  return <Practice1 />;
}