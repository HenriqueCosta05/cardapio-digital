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
    const { label, id, placeholder, value, variant = "base", onChange, helperText, iconName} = Props;

    return (
        <>
            <div className="relative my-6">
                <input
                    id={id}
                    type={variant === "password" ? "password" : "text"}
                    name="id-l11"
                    value={value}
                    placeholder={placeholder}
                    className="peer relative h-12 w-full rounded border border-slate-200 px-4 pl-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-red-500 invalid:text-red-500 focus:border-primary focus:outline-none invalid:focus:border-red-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    onChange={onChange}
                />
                <label
                    htmlFor="id-l11"
                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-primary peer-invalid:peer-focus:text-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                    {label}
                </label>
                <DynamicIcon
                    name={iconName}
                    className="absolute top-3 left-4 h-6 w-6 stroke-slate-400 peer-disabled:cursor-not-allowed"
                    size={16}
                />
                <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-red-500">
                    <span>{helperText}</span>
                </small>
            </div>
        </>
    )
}

