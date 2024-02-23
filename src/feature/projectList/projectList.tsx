import Link from "next/link";
import { ProjectCard } from "./components/projectCard";
import { Project } from "@/src/types/projects";

export function ProjectList({ projects }: { projects: Project[] }) {
    return (
        <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
            {projects.map((project, i) => (
                <div
                    key={project.title}
                >
                    <Link href={`/projectos/${project.slug}`}>
                        <ProjectCard project={project} />
                    </Link>
                </div>
            ))}
        </section>
    )
}