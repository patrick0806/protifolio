import { Link } from "@/src/components/link";
import { Tag } from "@/src/components/tag";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

export function ProjectCard() {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image
                    src="https://picsum.photos/1280/720"
                    alt="thumbnail do projeto wealth wizard"
                    width={420}
                    height={304}
                    className="w-full h-[200px] sm:h-[300px] lg:h-[420px] lg:min-h-full object-cover rounded-lg"
                />
            </div>

            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image
                        width={20}
                        height={20}
                        alt="Project title Icon"
                        src="/images/icons/project-title-icon.svg"
                        className="inline-block mr-2"
                    />
                    Wealth Wizard
                </h3>

                <p className="text-gray-400 my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias harum ea dicta rerum cupiditate voluptate optio doloremque sapiente soluta, velit reprehenderit modi accusamus repellat enim laborum perspiciatis quaerat praesentium molestiae. Quam harum minima commodi alias velit dolorum incidunt perferendis voluptas voluptatibus? Quia beatae, explicabo dolorum in fuga fugiat perferendis.</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <Tag name="Typescript" />
                    <Tag name="NextJS" />
                    <Tag name="NestJS" />
                    <Tag name="Tailwind" />
                    <Tag name="PostgreSQL" />
                    <Tag name="Docker" />
                </div>

                <Link href="/projetos/wealth-wizard">
                    Ver projeto
                    <HiArrowNarrowRight size={18} />
                </Link>
            </div>
        </div>
    )
}