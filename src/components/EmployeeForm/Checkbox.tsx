import type {JSX} from 'react';

interface CheckboxProps {
    // Props here
    label: string;
    checkboxName: string;
}

function Checkbox({label, checkboxName}: CheckboxProps): JSX.Element {
    return (
        <div>
            <label className="text-lg md:text-2xl block mb-2 font-medium">{checkboxName}</label>
            <div className="flex text-sm md:text-lg gap-4">
                <input id="remote-checkbox" type="checkbox"/>
                <label htmlFor="remote-checkbox">{label}</label>
            </div>
        </div>
    );
}

export default Checkbox;