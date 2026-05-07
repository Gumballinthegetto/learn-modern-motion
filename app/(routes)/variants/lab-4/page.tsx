import Lab4 from "./Lab4";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Variants Lab 4 - Toggle Switch Animation",
  description: "Create a toggle switch that animates between \"on\" and \"off\" states.",
};

export default function VariantsLab4() {
  return <Lab4 />;
}