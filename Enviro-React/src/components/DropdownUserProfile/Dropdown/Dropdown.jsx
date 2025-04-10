import { useState, useEffect, useRef } from "react";
import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownContent from "../DropdownContent/DropdownContent";
import "./Dropdown.css"
export default function Dropdown ({buttonText, content}) {
    
    const [open, setOpen ] = useState(false);
    
    const dropdownRef = useRef();

    const toggleDropdown = () => {
        setOpen((open) => !open);
    };

    useEffect( () => {
        const handleclick = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains (event.target)){
                setOpen(false);
            }
        };
            document.addEventListener("click", handleclick)

            return () => {
                document.removeEventListener("click", handleclick)
            };
        
    }, []) ;
    
    return (
        <div className="dropdown" ref= {dropdownRef}>
            <DropdownButton toggle = {toggleDropdown} open = {open} >
                {buttonText}
            </DropdownButton>
            <DropdownContent open = {open}>
                {content}
            </DropdownContent>
        </div>
    );
}