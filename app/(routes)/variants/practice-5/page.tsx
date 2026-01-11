import Practice5 from "@/app/ui/variants/Practice5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Variants Practice 5 - Dynamic List Animation",
  description:
    "Create a dynamic list with animated items that smoothly enter and exit using Motion variants.",
};

export default function VariantsPractice5() {
  return <Practice5 />;
}