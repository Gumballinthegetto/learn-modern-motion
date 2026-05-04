import Lab1 from "./Lab1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Variants Lab 1 - Simple Fade-In Component",
  description:
    "Create a component that fades in when it appears using Motion variants and Tailwind CSS styling.",
};

export default function VariantsLab1() {
  return <Lab1 />;
}