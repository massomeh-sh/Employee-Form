import type {JSX} from 'react';

interface RadioProps {
    label: string;
}

function Radio({label}:RadioProps): JSX.Element {
    return (
        <div className="flex justify-center items-center gap-4 text-sm md:text-lg">
            <input id={label} type="radio" value={label} name="jobType"/>
            <label htmlFor={label}>{label}</label>
        </div>
    );
}

export default Radio;