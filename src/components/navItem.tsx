'use client';

import Link from "next/link";
import { cn } from '../lib/utils';
import { usePathname } from 'next/navigation';

type NavItemProps = {
    label: string
    href: string
}

export function NavItem({ label, href }: NavItemProps) {
    const pathName = usePathname();
    const isActive = pathName === href;
    return (
        <Link href={href} className={cn("text-gray-400 flex items-center gap-2 font-mono  hover:text-emerald-400",
            isActive && "text-gray-50")}>
            <span className="text-emerald-400">#</span>
            {label}
        </Link>
    )
}
