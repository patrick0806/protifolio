'use client'

import { motion } from 'framer-motion';
import { SectionTitle } from "@/src/components/sectionTitle";
import { KnowTechCard } from "./components/knowTechCard";
import { KnownTech } from "@/src/types/projects";
import { CMSIcon } from "@/src/components/cmsIcon";


type KnowTechsProps = {
    techs: KnownTech[]
}

export function KnowTechs({ techs }: KnowTechsProps) {
    return (
        <section className="container py-16 ">
            <SectionTitle subtitle="competencias" title="Conhecimentos" />
            <div className="pt-3 grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
                {techs.map((tech, idx) => (
                    <motion.div
                        key={`know-tech-${tech.name}`}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.15, delay: idx * 0.1 }}
                    >
                        <KnowTechCard
                            tech={{
                                icon: <CMSIcon icon={tech.iconSvg} />,
                                name: tech.name,
                                startDate: tech.startDate
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}