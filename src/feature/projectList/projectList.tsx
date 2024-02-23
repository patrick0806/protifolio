import Link from "next/link";
import { ProjectCard } from "./components/projectCard";

export function ProjectList() {
    return (
        <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
            <Link href="/projetos/wealth-wizard">
                <ProjectCard />
            </Link>
            <Link href="/projetos/wealth-wizard">
                <ProjectCard />
            </Link>
            <Link href="/projetos/wealth-wizard">
                <ProjectCard />
            </Link>
        </section>
    )
}