/* eslint-disable react/prop-types */
import "./SectionTitle.css";

export const SectionTitle = ({ title, children }) => {
  return (
    <div className="sectionTitle">
      {children}
      <h1 className="lato">{title}</h1>
    </div>
  );
};
