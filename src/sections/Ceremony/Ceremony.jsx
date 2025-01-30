import { CiBookmark } from "react-icons/ci";
import { SectionTitle } from "../../components/SectionTitle";
import "./Ceremony.css";

export const Ceremony = () => {
  return (
    <section className="Ceremony">
      <SectionTitle title="CEREMONIA">
        <CiBookmark size={50} />
      </SectionTitle>
      <div className="ceremony--content">
        <p>
          Dios tiene un gran peso en nuestras vidas. Por eso mismo, te esperamos
        </p>
        <div className="ceremony--content__date">
          <p>15 MAR</p>
          <div className="divider"></div>
          <p>14:00</p>
        </div>
        <span>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
        <button>Ver ubicacion</button>
      </div>
    </section>
  );
};
