import Lab2 from "./Lab2";
import { getImages } from "@/libs/unsplash";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staggers Lab 2 - Stagger Image Gallery",
  description: "Create an image gallery where images fade in with staggered effect when loaded.",
};

export const dynamic = "force-dynamic";

export default async function StaggersLab2() {
  const images = await getImages(10);

  return (
    <Lab2
      images={images}
    />
  );
}