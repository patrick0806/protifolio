import { Link } from "@/src/components/link";
import { RichText } from "@/src/components/richText";
import { Tag } from "@/src/components/tag";
import { WorkExperience } from "@/src/types/workExperience";
import { differenceInMonths, differenceInYears, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Image from "next/image";

function formatTimeDuration(startDate: string, endDate: string) {
    const end = endDate ? new Date(endDate) : new Date();
    const months = differenceInMonths(end, new Date(startDate));
    const years = differenceInYears(end, new Date(startDate));
    const monthsRemaining = months % 12;

    return years > 0
        ? `${years} ano${years > 1 ? 's' : ''}${monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
        : `${months} mes${months > 1 ? 'es' : ''}`
}

export function Experience({ experience }: { experience: WorkExperience }) {
    const startDate = format(new Date(experience.startDate), 'MMM yyyy', { locale: ptBR })
    let endDate: string = "O momento";
    if (experience.endDate) {
        endDate = format(new Date(experience.endDate), 'MMM yyyy', { locale: ptBR })
    }

    const formattedDuration = formatTimeDuration(experience.startDate, experience.endDate)
    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image
                        src={experience.companyLogo.url}
                        alt="Ioasys icon"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                </div>
                <div className="h-full w-[1px] bg-gray-800" />
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <Link
                        href={experience.companyUrl}
                        target="_blank"
                        className="text-gray-500"
                    > @ {experience.companyName}</Link>

                    <h4 className="text-gray-400">{experience.role}</h4>
                    <span className="text-gray-500">{startDate} • {endDate} • ({formattedDuration})</span>
                    <div className="text-gray-400"><RichText content={experience.description.raw} /></div>

                    <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                    <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                        {experience.technologies.map((tech) => <Tag key={`${experience.companyName}-tech-${tech.name}`} name={tech.name} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}