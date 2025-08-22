import Banner from "@/components/Banner";
import ServiceHighlights from "@/components/ServiceHighlights";
import Trandding from "@/components/Trandding";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Trandding/>
      <ServiceHighlights/>
    </div>
  );
}
