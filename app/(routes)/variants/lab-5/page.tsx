import Lab5 from "./Lab5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Variants Lab 5 - Dynamic List Animation",
  description: "Create a list that animates items when they are added or removed.",
};

export default function VariantsLab5() {
  return <Lab5 />;
}