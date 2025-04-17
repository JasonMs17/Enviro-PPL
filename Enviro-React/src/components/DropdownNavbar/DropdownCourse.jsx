import { Link } from "react-router-dom";



export default function DropDownCourse ({open, onMouseEnter, onMouseLeave }){
    return(
        <div
        className={`DropDownCourse ${open ? "open" : ""}`}
        onMouseEnter={onMouseEnter}  // Event hover untuk memasuki dropdown
        onMouseLeave={onMouseLeave}  // Event hover untuk keluar dari dropdown
      >
        <ul className="gap-4">
          <li><Link to="/profile">Profil Saya</Link></li>
          <li><Link to="/settings">Pengaturan</Link></li>
        </ul>
      </div>
    );
}