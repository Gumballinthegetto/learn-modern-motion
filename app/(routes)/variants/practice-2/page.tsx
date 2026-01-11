import Practice2 from "@/app/ui/variants/Practice2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Variants Practice 2 - Navigation Menu with Slide Animation",
  description:
    "Build a navigation menu that slides in from the side with open and closed state variants.",
};

export default function VariantsPractice2() {
  return <Practice2 />;
}