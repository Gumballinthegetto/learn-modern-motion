import type { Metadata } from "next";
import Home from "./ui/home/Home";

export const metadata: Metadata = {
  title: "Home - Motion Practice",
  description: "Welcome to Motion Practice - Start your journey with interactive Motion exercises to master modern web animations.",
};

export default function HomePage() {
  return <Home />
}