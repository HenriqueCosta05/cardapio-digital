import React, { ReactNode } from "react"

interface ButtonProps {
    variant?: 'icon' | 'base'
    onClick?: () => void;
    children: string | ReactNode;
}
export default function Button(Props: ButtonProps) {
    const { variant, onClick, children } = Props;
    const baseClassNames = "inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap bg-primary px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-white transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none rounded-md"
    const iconClassNames = "inline-flex h-10 w-10 items-center justify-center gap-2 whitespace-nowrap bg-primary text-sm font-medium tracking-wide text-white shadow-md shadow-white transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none rounded-full"
    return (
        <>
            <button className={variant === "base" ? baseClassNames : iconClassNames} onClick={onClick}>
                {children}
            </button>
        </>
    )
}
