import Lab2 from "./Lab2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Variants Lab 2 - Navigation Menu with Slide Animation",
  description:
    "Build a navigation menu that slides in from the side with open and closed state variants.",
};

export default function VariantsLab2() {
  return <Lab2 />;
}