import {type ComponentProps, type JSX} from 'react';
import type {EmployeeFormData} from "../../types/employeeFormTypes.ts";

interface InputProps extends ComponentProps<"input"> {
    label: string;
    name: keyof EmployeeFormData;
    value: number | string;
    hasError: boolean;
    errorMessage: string;
    onValueChange: (identifier: keyof EmployeeFormData, value: string) => void;
    onValueBlur: (identifier: string) => void;
}

function Input({
                   label,
                   onValueChange,
                   name,
                   value,
                   hasError,
                   errorMessage,
                   onValueBlur,
                   ...props
               }: InputProps): JSX.Element {
    return (
        <div className="flex flex-col gap-3">
            <label htmlFor={label} className="text-lg md:text-2xl font-medium">{label}</label>
            <input
                value={value}
                onBlur={() => onValueBlur(name)}
                onChange={(event) => onValueChange(name, event.target.value)}
                id={label}
                className={`px-5 py-4 text-sm md:text-lg border-2 border-gray-400 ${hasError ? "border-red-500" : ""} outline-none focus:border-blue rounded-lg`} {...props}/>
            {hasError && <p className="text-red-500 text-sm lg:text-lg">{errorMessage}</p>}
        </div>
    );
}

export default Input;