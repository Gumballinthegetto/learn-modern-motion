import Practice6 from "./Practice6";
import { getImages } from "@/libs/unsplash";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Practice 6 - Gesture-Based Image Gallery",
  description:
    "Build a vertical image gallery with swipe navigation, gesture controls, and smooth transitions between photos.",
};

export default async function GesturesPractice6() {
  const images = await getImages(10);

  return (
    <Practice6
      images={images}
    />
  );
}