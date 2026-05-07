import Lab2 from "./Lab2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Variants Lab 2 - Navigation Menu with Slide Animation",
  description: "Create a navigation menu that slides in from the side.",
};

export default function VariantsLab2() {
  return <Lab2 />;
}