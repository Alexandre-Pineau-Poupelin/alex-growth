import { Hero } from "@/components/sections/Hero";
import { HowIWork } from "@/components/sections/HowIWork";
import { SystemDiagram } from "@/components/sections/SystemDiagram";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Experience } from "@/components/sections/Experience";
import { Experiments } from "@/components/sections/Experiments";
import { Skills } from "@/components/sections/Skills";
import { Stack } from "@/components/sections/Stack";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <HowIWork />
      <SystemDiagram />
      <CaseStudies />
      <Experience />
      <Experiments />
      <Skills />
      <Stack />
      <Education />
      <Contact />
    </>
  );
}
