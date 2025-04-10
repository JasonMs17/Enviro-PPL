import "./DropdownContent.css"



export default function DropdownContent ({children, open}){
    return (
        <div className={`dropdown-Content ${open ? "content-open" : null}`}>{children}</div>
    );
}