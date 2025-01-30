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
        <p className="lato">
          Dios tiene un gran peso en nuestras vidas. Por eso mismo, te esperamos
        </p>
        <div className="ceremony--content__date">
          <p className="afacad">15 MAR</p>
          <div className="divider"></div>
          <p className="afacad">14:00</p>
        </div>
        <span className="lato">
          2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
        </span>
        <a
          href="https://maps.app.goo.gl/qu5UsswmdrtZgEtb7"
          target="blank"
          className="lato"
        >
          Ver ubicacion
        </a>
      </div>
    </section>
  );
};
