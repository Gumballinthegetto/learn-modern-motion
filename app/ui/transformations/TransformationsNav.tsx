import SectionNav from "@/components/SectionNav";
import { navigationConfig } from "@/config/navigation";

export default function TransformationsNav() {
  return <SectionNav links={navigationConfig.transformations} />;
}