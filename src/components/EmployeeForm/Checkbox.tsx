import type {JSX} from 'react';
import type {EmployeeFormData} from "../../types/employeeFormTypes.ts";

interface CheckboxProps {
    // Props here
    label: string;
    checkboxName: string;
    value: boolean;
    name: keyof EmployeeFormData;
    onValueChange: (identifier: keyof EmployeeFormData, value: boolean) => void;
    onValueBlur: (identifier: string) => void;
}


function Checkbox({label, checkboxName, value, name, onValueChange}: CheckboxProps): JSX.Element {
    return (
        <div className="flex flex-col md:gap-4">
            <label className="text-lg md:text-2xl block mb-2 font-medium">{checkboxName}</label>
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