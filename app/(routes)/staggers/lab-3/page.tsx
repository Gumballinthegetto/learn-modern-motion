import Lab3 from "./Lab3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staggers Lab 3 - Stagger Button Press",
  description:
    "Create a set of buttons that animate into view with a staggered effect when hovered over.",
};
export default function StaggersLab3() {
  return <Lab3 />;
}