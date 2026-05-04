import Lab4 from "./Lab4";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Variants Lab 4 - Toggle Switch Animation",
  description:
    "Build a toggle switch that animates smoothly between on and off states using Motion variants.",
};

export default function VariantsLab4() {
  return <Lab4 />;
}