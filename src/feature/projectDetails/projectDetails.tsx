'use client'

import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import { SectionTitle } from "@/src/components/sectionTitle";
import { Tag } from "@/src/components/tag";
import { Button } from '@/src/components/button';
import { Link } from '@/src/components/link';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Project } from '@/src/types/projects';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { motion } from 'framer-motion';
import { fadeUpAnimation, tagAnimation } from '@/src/lib/animation';

export function ProjectDetails({ project }: { project: Project }) {
    return (
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
            <motion.div
                className="absolute inset-0 z-[-1]"
                style={{
                    background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.pageThumbnail.url}) no-repeat center/cover`
                }}
                initial={{ opacity: 0, scale: 1.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            />

            <SectionTitle subtitle="projeto" title="Wealth Wizard" className="text-center items-center [&>h3]:text-4xl" />
            <motion.div
                className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
                {...fadeUpAnimation}
            >
                <RichText content={project.description.raw} />
            </motion.div>
            <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
                {project.technologies.map((tech, idx) => (
                    <Tag key={tech.name} name={tech.name}  {...tagAnimation} transition={{ duration: 0.3, delay: idx * .01 }} />
                ))}
            </div>
            <motion.div
                className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
                {...fadeUpAnimation}
            >
                {project?.githubUrl && (
                    <a href={project.githubUrl} target='_blank'>
                        <Button className='min-w-[180px]'>
                            <TbBrandGithub size={20} />
                            Repositório
                        </Button>
                    </a>
                )}
                <a href={project.liveProjectUrl} target='_blank'>
                    <Button className='min-w-[180px]'>
                        <FiGlobe size={20} />
                        Projeto Online
                    </Button>
                </a>
            </motion.div>
            <Link href="/projetos">
                <HiArrowNarrowLeft size={20} />
                Voltar para projetos
            </Link>
        </section>
    )
}