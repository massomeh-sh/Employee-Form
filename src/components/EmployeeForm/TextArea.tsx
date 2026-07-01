import type {JSX} from 'react';

interface TextAreaProps {
    // Props here
    label: string;
    placeholder: string;
}

function TextArea({label, placeholder}: TextAreaProps): JSX.Element {
    return (
        <div className="flex flex-col justify-center">
            <label htmlFor={label} className="text-lg md:text-2xl block mb-4 font-medium">{label}</label>
            <textarea id={label} placeholder={placeholder}
                      className="text-sm md:text-lg outline-none border-2 border-light-grey focus:border-blue rounded-lg px-5 pt-4 pb-12"/>
        </div>
    );
}

export default TextArea;