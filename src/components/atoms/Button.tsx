import React, { ReactNode } from "react"

interface ButtonProps {
    variant?: 'icon' | 'base'
    onClick?: () => void;
    children: string | ReactNode;
}
export default function Button(Props: ButtonProps) {
    const { variant, onClick, children } = Props;
    const baseClassNames = "inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap bg-primary text-sm font-medium tracking-wide text-white shadow-md shadow-white transition duration-300 hover:bg-primary-light hover:shadow-sm hover:shadow-primary-light focus:bg-primary focus:shadow-sm focus:shadow-primary-light focus-visible:outline-none disabled:cursor-not-allowed disabled:border-primary disabled:primary disabled:shadow-none rounded-md"
    const iconClassNames = "inline-flex h-10 w-10 items-center justify-center gap-2 whitespace-nowrap bg-primary text-sm font-medium tracking-wide text-white shadow-md shadow-white transition duration-300 hover:bg-primary-light hover:shadow-sm hover:shadow-primary-light focus:bg-primary focus:shadow-sm focus:shadow-primary-light focus-visible:outline-none disabled:cursor-not-allowed disabled:border-primary disabled:primary disabled:shadow-none rounded-full"
    return (
        <>
            <button className={variant === "base" ? baseClassNames : iconClassNames} onClick={onClick}>
                {children}
            </button>
        </>
    )
}
