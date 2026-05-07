import Lab4 from "./Lab4";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staggers Lab 4 - Staggered Grid Layout",
  description: "Create a grid of items that animates into view with a staggered effect.",
};
export default function StaggersLab4() {
  return <Lab4 />;
}