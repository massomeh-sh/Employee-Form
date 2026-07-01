import type {JSX} from 'react';
import type {DepartmentOptionsType, LocationOptionsType} from "../../types/employeeForm.ts";

interface SelectProps {
    // Props here
    label: string;
    options: DepartmentOptionsType[] | LocationOptionsType[];
}

function Selector({label, options}: SelectProps): JSX.Element {
    return (
        <div>
            <label htmlFor={label} className="text-lg md:text-2xl block mb-3 font-medium">{label}</label>
            <select id={label}
                    className="px-5 py-4 w-full p-3 text-sm md:text-lg border-2 border-gray-400 outline-none focus:border-blue rounded-lg ">
                <option hidden>Select department</option>
                {options.map((option) => <option key={option}>{option}</option>)}
            </select>
        </div>
    );
}

export default Selector;