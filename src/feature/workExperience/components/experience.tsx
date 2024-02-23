import { Link } from "@/src/components/link";
import { Tag } from "@/src/components/tag";
import Image from "next/image";

export function Experience() {
    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image
                        src="/images/ioasys.jpg"
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
                        href="https://www.ioasys.com.br/"
                        target="_blank"
                        className="text-gray-500"
                    > @ Ioasys</Link>
                    <h4 className="text-gray-400">Desenvolvedor Fullstack</h4>
                    <span className="text-gray-500">jan 2022 • O momento • (2 anos)</span>
                    <p className="text-gray-400">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta hic quod saepe velit nobis voluptates accusamus neque labore vitae quia, optio odio magnam ullam exercitationem est laboriosam eius? Placeat, veritatis.
                    </p>
                    <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                    <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                        <Tag name="Typescript" />
                        <Tag name="NextJS" />
                        <Tag name="NestJS" />
                        <Tag name="ReactJS" />
                        <Tag name="NodeJS" />
                    </div>
                </div>
            </div>
        </div>
    )
}