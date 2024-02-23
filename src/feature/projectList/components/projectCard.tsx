import { Project } from "@/src/types/projects";
import Image from "next/image";


export function ProjectCard({ project }: { project: Project }) {
    const technologies = project.technologies.map((x) => x.name).join(', ')
    return (
        <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 transition-all opacity-70 hover:opacity-100 group cursor-pointer">
            <div className="w-full h-48 overflow-hidden ">
                <Image
                    alt={`Thumbnail do projeto ${project.title}`}
                    src={project.thumbnail.url}
                    width={380}
                    height={200}
                    unoptimized={true}
                    className="group-hover:scale-110 w-full h-full object-cover duration-500 transition-all"
                />
            </div>
            <div className="flex flex-1 flex-col p-8">
                <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">{project.title}</strong>
                <p className="mt-2 text-gray-400 line-clamp-4">{project.shortDescription}</p>
                <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
                    {technologies}
                </span>
            </div>
        </div>
    )
}