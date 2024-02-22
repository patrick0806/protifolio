import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./navItem";

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
        <header className="absolute top-0 w-full z-10 h-24 flex justify-center">
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
        </header>
    )
}