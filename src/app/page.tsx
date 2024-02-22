import { FeaturedProjects } from "../feature/featuredProjects/featuredProjects";
import { HeroSection } from "../feature/heroSection/heroSection";
import { KnowTechs } from "../feature/knowTechs/knowTechs";
import { WorkExperience } from "../feature/workExperience/workExperience";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnowTechs />
      <FeaturedProjects />
      <WorkExperience />
    </>
  )
}
