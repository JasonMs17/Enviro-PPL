import React from "react";
import "./userProgress/UserProgress.css";
import "../pages/ProfileLayout/userCourseLayout/userCourse.css";

export default function SkeletonCard({ style = {} }) {
  return (
    <div className="progress-container" style={style}>
      <div className="user-course-profile">
        <div className="course-card-user-progress skeleton-card">
          <div className="course-card-header">
            <div className="course-card-logo-wrapper skeleton-image"></div>
            <div className="course-card-content">
              <div className="skeleton-text"></div>
            </div>
          </div>
          <div className="course-card-summary">
            <div className="skeleton-text"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
