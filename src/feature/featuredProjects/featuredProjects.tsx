import { HorizontalSeparator } from "@/src/components/horizontalSeparator";
import { SectionTitle } from "@/src/components/sectionTitle";
import { ProjectCard } from "./components/projectCard";
import { Link } from "@/src/components/link";
import { HiArrowCircleRight } from "react-icons/hi";

export function FeaturedProjects() {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="destaques" title="Projetos em destaque" />
            <HorizontalSeparator className="mb-16" />
            <div>
                <ProjectCard />
                <HorizontalSeparator className="my-16" />
                <ProjectCard />
                <HorizontalSeparator className="my-16" />

                <p className="flex items-center gap-1.5">
                    <span>Se interessour?</span>
                    <Link href="/projetos" className="inline-flex">
                        Ver todos
                        <HiArrowCircleRight />
                    </Link>
                </p>
            </div>
        </section>
    )
}