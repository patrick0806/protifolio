import Image from "next/image"

const projectSections = [
    {
        title: 'Login',
        image: 'https://picsum.photos/1280/720',
    },
    {
        title: 'Home',
        image: 'https://picsum.photos/1280/720',
    },
]
export function ProjectSections() {
    return (
        <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
            {projectSections.map(section => (
                <div key={section.title} className="flex flex-col items-center gap-6 md:gap-12">
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
                        {section.title}
                    </h2>
                    <Image
                        src={section.image}
                        width={1080}
                        height={682}
                        alt={`Imagem da seção: ${section.title}`}
                        unoptimized
                        className="w-full aspect-auto rounded-lg object-cover"
                    />
                </div>
            ))}
        </section>
    )
}