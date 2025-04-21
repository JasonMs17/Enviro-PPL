import { Link } from "react-router-dom";
import "./DropDownCourse.css";


export default function DropDownCourse ({open, onMouseEnter, onMouseLeave }){
    return(
        <div
        className={`DropDownCourse ${open ? "open" : ""}`}
        onMouseEnter={onMouseEnter}  // Event hover untuk memasuki dropdown
        onMouseLeave={onMouseLeave}  // Event hover untuk keluar dari dropdown
      >
        <ul className="gap-4">
          <li><Link to="/apa-itu-polusi-air-pencemaran-air">Polusi Air</Link></li>
          <li><Link to="/apa-itu-polusi-udara-dan-sumbernya">Polusi Udara</Link></li>
          <li><Link to="/apa-itu-polusi-tanah-dan-penyebabnya">Polusi Tanah</Link></li>
        </ul>
      </div>
    );
}