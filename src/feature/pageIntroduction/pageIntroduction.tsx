'use client'

import { motion } from 'framer-motion';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from "@/src/components/link";
import { SectionTitle } from "@/src/components/sectionTitle";

export function PageIntroduction() {
    return (
        <section className='w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2'>
            <SectionTitle
                subtitle="projetos"
                title="Meus projetos"
                className="text-center items-center [&>h3]:text-4xl"
            />
            <motion.div
                className='flex flex-col items-center'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
                    Aqui você pode ver alguns dos trabalhos que desenvolvi. Navegue à vontade e explore os projetos para ver mais detalhes, como as técnologias que foram utilizadas
                </p>
                <Link href="/">
                    <HiArrowNarrowLeft size={20} />
                    Voltar para a home
                </Link>
            </motion.div>
        </section>
    )
}