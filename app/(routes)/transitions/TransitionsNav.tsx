import SectionNav from "@/components/SectionNav";
import { navigationConfig } from "@/config/navigation";

export default function TransitionsNav() {
  return <SectionNav links={navigationConfig.transitions} />;
}
