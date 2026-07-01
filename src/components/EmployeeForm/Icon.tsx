import type {JSX} from 'react';
import type {IconType} from "react-icons";

interface IconProps {
    // Props here
    icon: IconType
    clickable: boolean
}

function Icon({icon: Icon, clickable}: IconProps): JSX.Element {
    return (
        <div className={`text-lg md:text-4xl text-light-grey ${clickable ? "cursor-pointer" : ""}`}>
            <Icon/>
        </div>
    );
}

export default Icon;