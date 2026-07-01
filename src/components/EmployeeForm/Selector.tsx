import {type JSX} from 'react';
import type {DepartmentOptionsType, EmployeeFormData, LocationOptionsType} from "../../types/employeeFormTypes.ts";

interface SelectProps {
    // Props here
    label: string;
    name: keyof EmployeeFormData;
    value: string;
    hasError: boolean;
    errorMessage: string;
    onValueChange: (identifier: keyof EmployeeFormData, value: string) => void;
    onValueBlur: (identifier: string) => void;
    options: DepartmentOptionsType[] | LocationOptionsType[];
}

function Selector({
                      label,
                      options,
                      name,
                      value,
                      hasError,
                      errorMessage,
                      onValueBlur,
                      onValueChange
                  }: SelectProps): JSX.Element {
    return (
        <div className="flex flex-col gap-3">
            <div>
                <label htmlFor={label} className="text-lg md:text-2xl block mb-3 font-medium">{label}</label>
                <select value={value} onChange={(event) => onValueChange(name, event.target.value)}
                        onBlur={() => onValueBlur(name)} name={name} id={label}
                        className={`px-5 py-4 w-full p-3 text-sm md:text-lg border-2 border-gray-400 ${hasError ? "border-red-500" : ""} outline-none focus:border-blue rounded-lg`}>
                    <option hidden>Select department</option>
                    {options.map((option) => <option key={option}>{option}</option>)}
                </select>
            </div>
            {hasError && <p className="text-red-500 text-sm lg:text-lg">{errorMessage}</p>}
        </div>
    );
}

export default Selector;