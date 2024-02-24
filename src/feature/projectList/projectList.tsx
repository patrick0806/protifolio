'use client'

import { motion } from 'framer-motion';
import Link from "next/link";
import { ProjectCard } from "./components/projectCard";
import { Project } from "@/src/types/projects";
import { fadeUpAnimation } from '@/src/lib/animation';

export function ProjectList({ projects }: { projects: Project[] }) {
    return (
        <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
            {projects.map((project, idx) => (
                <motion.div
                    key={project.title}
                    {...fadeUpAnimation}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                >
                    <Link href={`/projetos/${project.slug}`}>
                        <ProjectCard project={project} />
                    </Link>
                </motion.div>
            ))}
        </section>
    )
}