import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <div className="px-4 md:px-8 xl:px-12 pb-20">
        <Hero />
      </div>
      <Section1 />
      <div className="px-4 md:px-8 xl:px-12 py-20">
        <Section2 />
        <Section3 />
        <Slider />
        <Section4 />
      </div>
    </>
  );
}
