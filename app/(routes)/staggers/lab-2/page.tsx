import Lab2 from "./Lab2";
import { getImages } from "@/libs/unsplash";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staggers Lab 2 - Image Gallery",
  description:
    "Master staggering effects in image galleries, creating smooth entrance animations as visual content loads into the interface.",
};

export default async function StaggersLab2() {
  const images = await getImages(10);

  return (
    <Lab2
      images={images}
    />
  );
}