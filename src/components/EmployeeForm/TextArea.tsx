import type {JSX} from 'react';
import type {EmployeeFormData} from "../../types/employeeFormTypes.ts";

interface TextAreaProps {
    label: string;
    placeholder: string;
    value: string;
    name: keyof EmployeeFormData;
    isOptional?: boolean;
    hasError?: boolean;
    errorMessage?: string;
    onChangeValue: (identifier: keyof EmployeeFormData, value: string) => void;
    onValueBlur: (identifier: string) => void;
}

function TextArea({
                      label,
                      placeholder,
                      value,
                      name,
                      isOptional,
                      hasError,
                      errorMessage,
                      onValueBlur,
                      onChangeValue
                  }: TextAreaProps): JSX.Element {
    return (
        <div className="flex flex-col justify-center gap-1">
            <div className="flex gap-3 items-center mb-1 md:mb-4">
                <label htmlFor={label} className="text-lg md:text-2xl block font-medium">{label}</label>
                {isOptional && <span className="text-sm md:text-lg  text-blue">(OPTIONAL)</span>}
            </div>
            <textarea onChange={(event) => onChangeValue(name, event.target.value)} onBlur={() => onValueBlur(name)}
                      value={value} id={name}
                      placeholder={placeholder}
                      className={`text-sm md:text-lg outline-none border-2 border-light-grey ${hasError ? "border-red-500" : ""} focus:border-blue rounded-lg px-5 pt-4 pb-12`}/>
            {hasError && <p className="text-red-500 text-sm lg:text-lg">{errorMessage}</p>}
        </div>
    );
}

export default TextArea;