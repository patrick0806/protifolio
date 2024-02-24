'use client'

import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./navItem";
import { motion } from 'framer-motion';

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Projetos',
        href: '/projetos',
    },
]
export function Header() {
    return (
        <motion.header
            className="absolute top-0 w-full z-10 h-24 flex justify-center"
            initial={{ top: -100 }}
            animate={{ top: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <Image width={58} height={49} src="/images/logo.svg" alt="Logo header" />
                </Link>

                <nav className="flex items-center gap-4 sm:gap-10">
                    {NAV_ITEMS.map(item => (
                        <NavItem key={item.href} {...item} />
                    ))}
                </nav>
            </div>
        </motion.header>
    )
}