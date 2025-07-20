import { Check } from "lucide-react";

interface CheckboxProps {
    label: string;
    checked?: boolean;
    onChange?: () => void;
    disabled?: boolean;
    helperText?: string;
    id: string;
}
export default function Checkbox(Props: CheckboxProps) {
    const { label, checked, onChange, disabled, helperText, id} = Props;

    return (
        <>
            <div className="relative flex flex-wrap items-center">
                <input
                    className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-500 bg-white transition-colors checked:border-primary checked:bg-primary checked:hover:border-primary-dark checked:hover:bg-primary-dark focus:outline-none checked:focus:border-primary-dark checked:focus:bg-primary-dark focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    id={id}
                />
                <label
                    className="cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                    htmlFor={id}
                >
                    {label}
                </label>
                <small className="w-full py-2 pl-6 text-xs text-slate-400 transition peer-invalid:text-red-600">
                    <span>{helperText && helperText}</span>
                </small>
                <Check
                    className="pointer-events-none absolute left-0 top-1 h-4 w-4 -rotate-90 stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                    size={4}
                />
            </div>
        </>
    )
}
