/* eslint-disable react/prop-types */
import "./SectionTitle.css";

export const SectionTitle = ({ title, children }) => {
  return (
    <div className="sectionTitle">
      {children}
      <h1>{title}</h1>
    </div>
  );
};
