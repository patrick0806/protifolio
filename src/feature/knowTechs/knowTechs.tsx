import { SectionTitle } from "@/src/components/sectionTitle";
import { KnowTechCard } from "./components/knowTechCard";
import {
    TbBrandNextjs,
    TbBrandNodejs,
    TbBrandTypescript,
    //TbBrandJavascript,
    //TbBrandHtml5,
    //TbBrandCss3,
    TbBrandTailwind,
    TbBrandDocker,
    //TbBrandWordpress,
    TbDatabase,
    TbBrandMongodb,
    TbCoffee
} from "react-icons/tb";
import { KnownTech } from "@/src/types/projects";
import { CMSIcon } from "@/src/components/cmsIcon";

const knowTechs = [
    {
        icon: <TbBrandTypescript />,
        name: "Typescript",
        startDate: "2021-06-01"
    },
    {
        icon: <TbBrandNodejs />,
        name: "Node.js",
        startDate: "2021-06-01"
    },
    {
        icon: <TbBrandNextjs />,
        name: "Next.js",
        startDate: "2021-06-01"
    },
    {
        icon: <TbCoffee />,
        name: "Java",
        startDate: "2023-08-01"
    },
    {
        icon: <TbBrandTailwind />,
        name: "Tailwind",
        startDate: "2021-06-01"
    },
    {
        icon: <TbBrandDocker />,
        name: "Docker",
        startDate: "2023-01-01"
    },
    {
        icon: <TbDatabase />,
        name: "PostgreSQL",
        startDate: "2021-06-01"
    },
    {
        icon: <TbBrandMongodb />,
        name: "MongoDB",
        startDate: "2023-01-01"
    }
]

type KnowTechsProps = {
    techs: KnownTech[]
}

export function KnowTechs({ techs }: KnowTechsProps) {
    return (
        <section className="container py-16 ">
            <SectionTitle subtitle="competencias" title="Conhecimentos" />
            <div className="pt-3 grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
                {techs.map(tech => (
                    <KnowTechCard
                        key={tech.name}
                        tech={{
                            icon: <CMSIcon icon={tech.iconSvg} />,
                            name: tech.name,
                            startDate: tech.startDate
                        }}
                    />
                ))}
            </div>
        </section>
    )
}