import React from "react";
import "./SectionTitle.css";
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-area">
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title">{title}</h2>
    </div>
  );
};

export default SectionTitle;
