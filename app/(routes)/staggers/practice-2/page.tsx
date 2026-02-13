import Practice2 from "./Practice2";
import { getImages } from "@/libs/unsplash";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestures Practice 1 - Swipeable Cards",
  description:
    "Learn to build swipeable card interfaces with drag gestures, constraints, and smooth animations for next/previous navigation.",
};

export default async function StaggersPractice2() {
  const images = await getImages(3);

  return (
    <Practice2
      images={images}
    />
  );
}