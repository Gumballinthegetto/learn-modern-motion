import Practice2 from "./Practice2";
import { getImages } from "@/libs/unsplash";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staggers Practice 2 - Image Gallery",
  description:
    "Master staggering effects in image galleries, creating smooth entrance animations as visual content loads into the interface.",
};

export default async function StaggersPractice2() {
  const images = await getImages(10);

  return (
    <Practice2
      images={images}
    />
  );
}