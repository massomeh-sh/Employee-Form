import type {ComponentProps, JSX} from 'react';

interface InputProps extends ComponentProps<"input"> {
    label: string;
}

function Input({label, ...props}: InputProps): JSX.Element {
    return (
        <div className="flex flex-col gap-3">
            <label htmlFor={label} className="text-lg md:text-2xl font-medium">{label}</label>
            <input
                id={label}
                className="px-5 py-4 text-sm md:text-lg border-2 border-gray-400 outline-none focus:border-blue rounded-lg" {...props}/>
        </div>
    );
}

export default Input;