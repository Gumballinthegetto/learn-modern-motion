import Lab6 from "./Lab6";
import { getImages } from "@/libs/unsplash";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Lab 6 - Gesture-Based Image Gallery",
  description: "Create an image gallery that can be navigated vertically.",
};

export default async function GesturesLab6() {
  const images = await getImages(10);

  return (
    <Lab6
      images={images}
    />
  );
}