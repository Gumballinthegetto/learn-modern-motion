import Lab4 from "./Lab4";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motion Values Lab 4 - Dynamic Rotation",
  description:
    "Master advanced useTransform techniques to map raw motion values into formatted CSS strings like rotation degrees.",
};

export default function MotionValueLab4Page() {
  return <Lab4 />;
}
