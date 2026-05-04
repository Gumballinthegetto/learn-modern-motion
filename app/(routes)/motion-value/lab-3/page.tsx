import Lab3 from "./Lab3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motion Values Lab 3 - Spring-Animation Position",
  description:
    "Explore the animate function to drive motion values with spring physics for natural-feeling interactions.",
};

export default function MotionValueLab3Page() {
  return <Lab3 />;
}
