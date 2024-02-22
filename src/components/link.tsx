import NextLink from 'next/link';
import { ComponentProps } from 'react';
import { cn } from '../lib/utils';

type Link = ComponentProps<typeof NextLink>;

export function Link({ className, children, ...props }: Link) {
    return (
        <NextLink
            className={cn(
                "flex items-center gap-2 text-gray-300 text-sm hover:text-emerald-500 transition-colors",
                className
            )}
            {...props}>
            {children}
        </NextLink>
    )
}