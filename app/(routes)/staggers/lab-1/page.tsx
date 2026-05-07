import Lab1 from "./Lab1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staggers Lab 1 - Staggered List Items",
  description: "Create a list of items that animate into view with a staggered effect.",
};
export default function StaggersLab1() {
  return <Lab1 />;
}