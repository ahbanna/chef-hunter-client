import React from "react";
import "./SectionTitle.css";
const SectionTitle = ({ title, subtitle, text }) => {
  return (
    <div className="section-area">
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </div>
  );
};

export default SectionTitle;
