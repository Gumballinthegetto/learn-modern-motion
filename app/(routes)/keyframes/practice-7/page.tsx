import type { Metadata } from "next";
import Practice7 from "@/app/ui/keyframes/Practice7";

export const metadata: Metadata = {
  title: "Keyframes Practice 7 - Background Color Loop",
  description:
    "Animate a full-screen background through multiple colors using Motion keyframes, practicing long-running loops and smooth easing.",
};

export default function KeyframesPractice7() {
  return <Practice7 />;
}