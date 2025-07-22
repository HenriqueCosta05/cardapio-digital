import React from "react"
import { DynamicIcon } from 'lucide-react/dynamic';

interface TextFieldProps {
    id: string;
    name: string;
    placeholder: string;
    label: string;
    value: string;
    variant?: "base" | "icon" | "password";
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    helperText?: string;
    iconName: string;
}
export default function TextField(Props: TextFieldProps) {
    const { label, id, placeholder, value, variant = "base", onChange, helperText, iconName, name } = Props;

    return (
        <>
            <div className="relative my-6 bg-white-theme rounded-md">
                <input
                    id={id}
                    type={variant === "password" ? "password" : "text"}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    className="peer relative h-12 w-full rounded border border-slate-200 px-4 pl-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-red-500 invalid:text-red-500 focus:border-slate-500 focus:outline-none invalid:focus:border-red-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 z-1000"
                    onChange={onChange}
                />
                <label
                    htmlFor={id}
                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-500 peer-focus:-top-4 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-slate-400 peer-invalid:peer-focus:text-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                    {label}
                </label>
                <DynamicIcon
                    name={iconName}
                    className="absolute top-4 left-4 h-4 w-4 stroke-slate-700 peer-disabled:cursor-not-allowed"
                />
                <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-red-500">
                    <span>{helperText}</span>
                </small>
            </div>
        </>
    )
}

