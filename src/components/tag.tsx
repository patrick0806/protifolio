'use client';

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type TagProps = ComponentProps<typeof motion.span> & {
    name: string,
}

export function Tag({ name, ...props }: TagProps) {
    return (
        <motion.span
            className="text-emerald-400 bg-emerald-900/80 text-sm py-1 px-3 rounded-lg"
            {...props}
        >
            {name}
        </motion.span>
    )
}