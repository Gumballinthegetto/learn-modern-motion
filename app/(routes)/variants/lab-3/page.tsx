import Lab3 from "./Lab3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Variants Lab 3 - Tooltip with Variants",
  description:
    "Create a tooltip that appears and disappears with a fade effect using visible and hidden state variants.",
};

export default function VariantsLab3() {
  return <Lab3 />;
}