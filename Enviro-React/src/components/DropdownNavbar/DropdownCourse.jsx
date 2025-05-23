import { Link } from "react-router-dom";
import "./DropdownCourse.css";

export default function DropDownCourse({ open, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={`DropDownCourse ${open ? "open" : ""}`}
      onMouseEnter={onMouseEnter} // Event hover untuk memasuki dropdown
      onMouseLeave={onMouseLeave} // Event hover untuk keluar dari dropdown
    >
      <ul className="course-type">
        <li>
          <Link to="/pencemaran-tanah/19">Polusi Tanah</Link>
        </li>
        <li>
          <Link to="/pencemaran-air/1">Polusi Air</Link>
        </li>
        <li>
          <Link to="/pencemaran-udara/10">Polusi Udara</Link>
        </li>
      </ul>
    </div>
  );
}
