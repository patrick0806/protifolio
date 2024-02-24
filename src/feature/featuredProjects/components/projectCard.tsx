'use client'
import { Link } from "@/src/components/link";
import { Tag } from "@/src/components/tag";
import { Project } from "@/src/types/projects";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from 'framer-motion';
import { fadeUpAnimation, tagAnimation } from "@/src/lib/animation";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="w-full h-[200px] sm:h-[300px] lg:h-[420px] lg:min-h-full"
                initial={{ opacity: 0, y: 100, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 100, scale: 0.5 }}
                transition={{ duration: 0.3, delay: 0.3 }}
            >
                <Image
                    src={project.thumbnail.url}
                    alt={`Thumbnail do projeto ${project.title}`}
                    width={420}
                    height={304}
                    className="w-full h-full object-cover rounded-lg"
                />
            </motion.div>

            <div >
                <motion.h3
                    className="flex items-center gap-3 font-medium text-lg text-gray-50"
                    {...fadeUpAnimation}
                    transition={{ duration: 0.7 }}
                >
                    <Image
                        width={20}
                        height={20}
                        alt="Project title Icon"
                        src="/images/icons/project-title-icon.svg"
                        className="inline-block mr-2"
                    />
                    {project.title}
                </motion.h3>

                <motion.p
                    className="text-gray-400 my-6"
                    {...fadeUpAnimation}
                    transition={{ duration: 0.2, delay: 0.3 }}
                >{project.shortDescription}</motion.p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    {project.technologies.map((tech, idx) => (
                        <Tag
                            key={`${project.title}-tech-${tech.name}`}
                            name={tech.name}
                            {...tagAnimation}
                            transition={{ duration: 0.3, delay: 0.5 * idx * 0.1 }}
                        />
                    ))}
                </div>

                <Link href={`/projetos/${project.slug}`}>
                    Ver projeto
                    <HiArrowNarrowRight size={18} />
                </Link>
            </div>
        </motion.div>
    )
}