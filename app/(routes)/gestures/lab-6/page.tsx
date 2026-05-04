import Lab6 from "./Lab6";
import { getImages } from "@/libs/unsplash";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Lab 6 - Gesture-Based Image Gallery",
  description:
    "Build a vertical image gallery with swipe navigation, gesture controls, and smooth transitions between photos.",
};

export default async function GesturesLab6() {
  const images = await getImages(10);

  return (
    <Lab6
      images={images}
    />
  );
}