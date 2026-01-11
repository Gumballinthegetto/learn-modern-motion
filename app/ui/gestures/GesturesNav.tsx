import SectionNav from "@/components/SectionNav";
import { navigationConfig } from "@/config/navigation";

export default function GesturesNav() {
  return <SectionNav links={navigationConfig.gestures} />
}