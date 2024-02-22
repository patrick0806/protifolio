import { FeaturedProjects } from "../feature/featuredProjects/featuredProjects";
import { HeroSection } from "../feature/heroSection/heroSection";
import { KnowTechs } from "../feature/knowTechs/knowTechs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnowTechs />
      <FeaturedProjects />
    </>
  )
}
