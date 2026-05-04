import Lab3 from "./Lab3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staggers Lab 3 - Animated Buttons",
  description:
    "Practice using stagger effects to animate interactive button groups, enhancing the tactile feel of UI components.",
};
export default function StaggersLab3() {
  return <Lab3 />;
}