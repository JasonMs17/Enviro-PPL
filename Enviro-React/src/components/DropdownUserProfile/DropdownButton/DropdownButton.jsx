import {FaChevronDown, FaChevronUp} from "react-icons/fa"
import "./DropdownButton.css"

export default function DropdownButton ({children, open, toggle}){
    return (
        <div onClick={toggle} 

        className={`dropdown-btn ${open ? "button-open" : ""}`}>
            {children}
            <span className="toggle-icon">
                {open ? <FaChevronUp /> :
                <FaChevronDown />}
                </span>
        </div>
    );
}