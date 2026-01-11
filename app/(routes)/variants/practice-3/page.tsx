import Practice3 from "@/app/ui/variants/Practice3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Variants Practice 3 - Tooltip with Variants",
  description:
    "Create a tooltip that appears and disappears with a fade effect using visible and hidden state variants.",
};

export default function VariantsPractice3() {
  return <Practice3 />;
}