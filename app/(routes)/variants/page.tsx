import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Variants - Motion Practice",
  description: "Practice Motion variants. Learn how to create declarative animations with predefined states and reusable animation patterns.",
};

export default function VariantsPage() {
  return (
    <div>
      <h1 className="text-[2rem] font-bold">Variants Page</h1>
    </div>
  );
}