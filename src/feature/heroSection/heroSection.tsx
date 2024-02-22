import Image from "next/image";

import { HiArrowNarrowRight } from "react-icons/hi";
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb";
import { Button } from "@/src/components/button";
import { TagBadge } from "@/src/components/tagBadge";

const CONTACTS = [
    {
        url: 'https://github.com/patrick0806',
        icon: <TbBrandGithub />
    },
    {
        url: 'https://www.linkedin.com/in/patrick-nicezi/',
        icon: <TbBrandLinkedin />
    },
    {
        url: 'https://wa.me/5519993912304',
        icon: <TbBrandWhatsapp />
    }
]

const TEC_TAGS = [
    "NodeJS", "Nestjs", "NextJS", "Tailwind", "Typescript", "Javascript", "Java", "Spring Boot"
]

export function HeroSection() {
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-no-repeat bg-cover flex flex-col justify-end pb-10 sm:pb-32 lg:pb-[110px] py-32">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-emerald-400">Olá meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Patrick Nicezi</h2>

                    <p className="text-gray-400 my-6 text-sm sm:text-base">Sou desenvolvedor fullstack, com mais de 4 anos de experiência. Sou apaixonado em construir soluções, por isso me foco no meu desenvolvimento como desenvolvedor full stack. Saber que o software que eu fiz é utilizado e auxilia verdadeiramente quem o usa </p>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {TEC_TAGS.map((tech, i) => <TagBadge key={i} name={tech} />)}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5 mt-6 lg:mt-10">
                        <Button className="w-max shadow-button">
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
                            {CONTACTS.map((contact, i) =>
                                <a
                                    href={contact.url}
                                    key={`contact-${i}`}
                                    target="_blank"
                                    className="hover:text-gray-100 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <Image
                    width={420}
                    height={404}
                    src="/images/profile-pic.png"
                    alt="Foto de perfil do Patrick Nicezi"
                    className="w-[300px] h-[320] lg:w-[420px] lg:h-[404] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
                />
            </div>
        </section>
    )
}