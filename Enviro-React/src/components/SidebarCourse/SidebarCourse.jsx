import React, { useState } from "react";
import "./SidebarCourse.css";
import { Link } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleChevronRight, faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function SidebarCourse({ done }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`SidebarCourse ${isOpen ? "open" : "closed"}`}>
            <h1 className="judul-bab">
                {isOpen && "Pencemaran Air"}
                {isOpen ? (
                    <FontAwesomeIcon
                        icon={faCircleChevronLeft}
                        style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
                        onClick={() => setIsOpen(false)}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faCircleChevronRight}
                        style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
                        onClick={() => setIsOpen(true)}
                    />
                )}
            </h1>

            {isOpen && (
                <>
                    <div className="subbab pertama">
                        <ul className="course-list">SubBab 1
                            <li><Link to="/">
                                {done ? (
                                    <CircleCheck className="sudah-dipelajari" size={20} />
                                ) : (
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "20px", color: "white" }} />
                                )}
                                Course 1</Link></li>
                            <li><Link to="/">
                                {done ? (
                                    <CircleCheck className="sudah-dipelajari" size={20} />
                                ) : (
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "20px", color: "white" }} />
                                )}
                                Course 2</Link></li>
                            <li><Link to="/">
                                {done ? (
                                    <CircleCheck className="sudah-dipelajari" size={20} />
                                ) : (
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "20px", color: "white" }} />
                                )}
                                Course 3</Link></li>
                        </ul>
                    </div>

                    <div className="subbab kedua">
                        <ul className="course-list">SubBab 2
                            <li><Link to="/">
                                {done ? (
                                    <CircleCheck className="sudah-dipelajari" size={20} />
                                ) : (
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "20px", color: "white" }} />
                                )}
                                Course 1</Link></li>
                            <li><Link to="/">
                                {done ? (
                                    <CircleCheck className="sudah-dipelajari" size={20} />
                                ) : (
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "20px", color: "white" }} />
                                )}
                                Course 2</Link></li>
                            <li><Link to="/">
                                {done ? (
                                    <CircleCheck className="sudah-dipelajari" size={20} />
                                ) : (
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "20px", color: "white" }} />
                                )}
                                Course 3</Link></li>
                        </ul>
                    </div>

                    <div className="subbab ketiga">
                        <ul className="course-list">SubBab 3
                            <li><Link to="/">
                                {done ? (
                                    <CircleCheck className="sudah-dipelajari" size={20} />
                                ) : (
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "20px", color: "white" }} />
                                )}
                                Course 1</Link></li>
                            <li><Link to="/">
                                {done ? (
                                    <CircleCheck className="sudah-dipelajari" size={20} />
                                ) : (
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "20px", color: "white" }} />
                                )}
                                Course 2</Link></li>
                            <li><Link to="/">
                                {done ? (
                                    <CircleCheck className="sudah-dipelajari" size={20} />
                                ) : (
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "20px", color: "white" }} />
                                )}
                                Course 3</Link></li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}
