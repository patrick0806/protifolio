import { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>
export function Input({ children, className, ...props }: InputProps) {
    return (
        <input
            className={cn(
                "w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600",
                className
            )}
            {...props}
        />
    )

}