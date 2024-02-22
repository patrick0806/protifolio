import { SectionTitle } from "@/src/components/sectionTitle";
import { Experience } from "./components/experience";

export function WorkExperience() {
    return (
        <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
                <SectionTitle subtitle="experiências" title="Experiência profissional" />
                <p>Estou sempre aberto a novos desafios e projetos emocionantes. Vamos trabalhar juntos e criar soluções incriveis.</p>
            </div>
            <div className="flex flex-col gap-4">
                <Experience />
                <Experience />
            </div>
        </section>
    )
}