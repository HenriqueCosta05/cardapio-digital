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
                    className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-500 bg-white transition-colors checked:border-primary checked:bg-primary checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
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
                <small className="w-full py-2 pl-6 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                    <span>{helperText && helperText}</span>
                </small>
                <Check
                    className="pointer-events-none absolute left-0 top-1 h-4 w-4 -rotate-90 stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                    size={4}
                >
                    <title id="title-3">Check mark icon</title>
                    <desc id="description-3">
                        Check mark icon to indicate whether the radio input is checked or
                        not.
                    </desc>
                </Check>
            </div>
        </>
    )
}
