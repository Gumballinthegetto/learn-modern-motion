import Lab3 from "./Lab3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motion Values Lab 3 - Spring-Animation Position",
  description: "Create a box that springs to a new position when clicked.",
};

export default function MotionValueLab3Page() {
  return <Lab3 />;
}
