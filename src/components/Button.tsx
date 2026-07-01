import type {JSX} from 'react';

interface ButtonProps {
    textBtn: string;
    isSaveBtn: boolean;
}

function Button({textBtn, isSaveBtn}: ButtonProps): JSX.Element {
    return (
        <button
            type={isSaveBtn ? "submit" : "reset"}
            className={`cursor-pointer ${isSaveBtn ? "text-white" : "text-black"} ${isSaveBtn ? "bg-blue" : ""} font-semibold text-sm px-3 py-2 md:text-lg md:px-5 md:py-3 border border-light-grey rounded-lg`}>
            {textBtn}
        </button>
    );
}

export default Button;