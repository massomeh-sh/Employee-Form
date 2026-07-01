import type {JSX} from 'react';
import type {EmployeeFormData} from "../../types/employeeFormTypes.ts";

interface RadioProps {
    label: string;
    name: keyof EmployeeFormData;
    value: string;
    selectedValue: string;
    onValueChange: (identifier: keyof EmployeeFormData, value: string) => void;
    onValueBlur: (identifier: string) => void;
}

function Radio({label, selectedValue, onValueChange,onValueBlur, name, value}: RadioProps): JSX.Element {
    return (
        <div className="flex justify-center items-center gap-4 text-sm md:text-lg">
            <input onChange={(event) => onValueChange(name, event.target.value)} onBlur={()=> onValueBlur(name)} id={`${name}-${value}`} type="radio"
                   checked={selectedValue === value} name={name} value={value}/>
            <label htmlFor={`${name}-${value}`}>{label}</label>
        </div>
    );
}

export default Radio;