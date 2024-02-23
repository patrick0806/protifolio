'use client';
import Image from "next/image";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "@/src/components/button";
import { Tag } from "@/src/components/tag";
import { HomePageInfo } from "@/src/types/pageInfo";
import { RichText } from "@/src/components/richText";
import { CMSIcon } from "@/src/components/cmsIcon";

export function HeroSection({ data }: { data: HomePageInfo }) {
    const { introduction, technologies, socials, profilePicture } = data;
    const handleContact = () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-no-repeat bg-cover flex flex-col justify-end pb-10 sm:pb-32 lg:pb-[110px] py-32">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-emerald-400">Olá meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Patrick Nicezi</h2>

                    <div className="text-gray-400 my-6 text-sm sm:text-base">
                        <RichText content={introduction.raw} />
                    </div>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {technologies.map((tech) => <Tag key={tech.name} name={tech.name} />)}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5 mt-6 lg:mt-10">
                        <Button className="w-max shadow-button" onClick={handleContact}>
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
                            {socials.map((contact, i) =>
                                <a
                                    href={contact.url}
                                    key={`contact-${i}`}
                                    target="_blank"
                                    className="hover:text-gray-100 transition-colors"
                                >
                                    <CMSIcon icon={contact.iconSvg} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <Image
                    width={420}
                    height={404}
                    src={profilePicture.url}
                    alt="Foto de perfil do Patrick Nicezi"
                    className="w-[300px] h-[320] lg:w-[420px] lg:h-[404] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover bg-gray-50/85"
                />
            </div>
        </section>
    )
}