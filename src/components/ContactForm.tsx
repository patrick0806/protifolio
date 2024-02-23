'use client'

import { HiArrowNarrowRight } from "react-icons/hi";
import { Input } from "./Input";
import { SectionTitle } from "./sectionTitle";
import { Button } from "./button";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import axios from "axios";
import toast from "react-hot-toast";

const contactFormSchema = z.object({
    name: z.string().min(1, { message: "Nome obrigatorio" }),
    email: z.string().min(1, { message: "Email obrigatorio" }).email({ message: "Email invalido" }),
    message: z.string().min(1, { message: "Mensagem obrigatorio" }).max(500, { message: "Mensagem muito grande" }),
})

export function ContactForm() {
    const { handleSubmit, control, register, reset, formState: { errors, isSubmitting } } = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        }
    });
    const onSubmit = async (data: any) => {
        try {
            await axios.post('/api/contact', data);
            toast.success("Mensagem enviada com sucesso!")
            reset()
        } catch (error) {
            toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.")
        }
    }
    return (
        <section className="py-16 px-6 md:py-34 flex items-center justify-center bg-gray-950" id="contact">
            <div className="w-full max-w-[420px] mx-auto">
                <SectionTitle
                    subtitle="contato"
                    title="Vamos trabalhar juntos? Entre em contato"
                    className="text-center items-center"
                />

                <form
                    className="mt-12 w-ful flex flex-col gap-4"
                    onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <Input
                                placeholder="Nome"
                                {...field}
                            />
                        )}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <Input placeholder="Email" {...field} />
                        )}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                    <textarea
                        placeholder="Mensagem"
                        className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
                        maxLength={500}
                        {...register("message")}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

                    <Button className="mt-6 w-max mx-auto shadow-button" disabled={isSubmitting}>
                        Enviar mensagem
                        <HiArrowNarrowRight size={18} />
                    </Button>
                </form>
            </div>
        </section>
    )
}