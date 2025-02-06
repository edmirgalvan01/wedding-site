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
          <p className="lato">15 MAR</p>
          <div className="divider"></div>
          <p className="lato">14:00</p>
        </div>
        <span className="lato">
          Amatlán s/n, Petromex, 93290 Poza Rica de Hidalgo, Ver.
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
