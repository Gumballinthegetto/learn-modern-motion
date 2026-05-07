import Lab4 from "./Lab4";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motion Values Lab 4 - Dynamic Rotation",
  description: "Create a component that rotates based on a motion value.",
};

export default function MotionValueLab4Page() {
  return <Lab4 />;
}
