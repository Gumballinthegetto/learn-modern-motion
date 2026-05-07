import type { Metadata } from "next";
import Home from "./ui/home/Home";

export const metadata: Metadata = {
  title: "Home - Motion Lab",
  description: "Welcome to Motion Lab - Start your journey with interactive Motion exercises to master modern web animations.",
};

export default function HomePage() {
  return <Home />
}