import type {JSX} from 'react';
import type {EmployeeFormData} from "../../types/employeeFormTypes.ts";

interface CheckboxProps {
    // Props here
    label: string;
    checkboxName: string;
    value: boolean;
    name: keyof EmployeeFormData;
    isOptional: boolean;
    onValueChange: (identifier: keyof EmployeeFormData, value: boolean) => void;
    onValueBlur: (identifier: string) => void;
}


function Checkbox({label, checkboxName, value, name, isOptional, onValueChange}: CheckboxProps): JSX.Element {
    return (
        <div className="flex flex-col md:gap-4">
            <div className="flex items-center gap-3 mb-2 ">
                <label className="text-lg md:text-2xl block font-medium">{checkboxName}</label>
                {isOptional && <span className="text-sm md:text-lg  text-blue">(OPTIONAL)</span>}
            </div>
            <div className="flex text-sm md:text-lg gap-4">
                <input onChange={(event) => onValueChange(name, event.target.checked)}
                       checked={value}
                       id="remote-checkbox" type="checkbox"/>
                <label htmlFor="remote-checkbox">{label}</label>
            </div>
        </div>
    );
}

export default Checkbox;