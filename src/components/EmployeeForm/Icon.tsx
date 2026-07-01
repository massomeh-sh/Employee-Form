import type {JSX} from 'react';
import type {IconType} from "react-icons";

interface IconProps {
    // Props here
    icon: IconType
    clickable: boolean
}

function Icon({icon: Icon, clickable}: IconProps): JSX.Element {
    return (
        <div className={`text-3xl md:text-5xl text-light-grey ${clickable ? "cursor-pointer" : ""}`}>
            <Icon/>
        </div>
    );
}

export default Icon;