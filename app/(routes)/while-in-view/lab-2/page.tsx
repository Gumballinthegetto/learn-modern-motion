import { getImages } from "@/libs/unsplash";
import Lab2 from "./Lab2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "While In View Lab 2 - Card Flip Animation",
  description: "Create a card that flips when it comes into view, revealing its back side.",
};

export const dynamic = "force-dynamic";

export default async function WhileInViewLab2Page() {
  const images = await getImages(1);

  return <Lab2 image={images[0]} />;
}
