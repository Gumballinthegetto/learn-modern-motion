import Lab5 from "./Lab5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Variants Lab 5 - Dynamic List Animation",
  description:
    "Create a dynamic list with animated items that smoothly enter and exit using Motion variants.",
};

export default function VariantsLab5() {
  return <Lab5 />;
}