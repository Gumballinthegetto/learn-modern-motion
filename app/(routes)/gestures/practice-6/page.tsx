import Practice6 from "@/app/ui/gestures/Practice6";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Practice 6 - Gesture-Based Image Gallery",
  description:
    "Build a vertical image gallery with swipe navigation, gesture controls, and smooth transitions between photos.",
};

async function getImages() {
  const res = await fetch('https://api.unsplash.com/photos/random?count=20', {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
    next: {
      revalidate: 3600,
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch images');
  }

  return res.json();
};

export default async function GesturesPractice6() {
  const images = await getImages();

  return (
    <Practice6
      images={images}
    />
  );
}