import "./DropdownItem.css"

export default function DropdownItems ({children, onClick}) {
    return (
        <div className="dropdown-items" onClick={onClick}>
            {children}
        </div>
    );
}