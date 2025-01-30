import { CiBookmarkCheck } from "react-icons/ci";
import { SectionTitle } from "../../components/SectionTitle";
import "./Identify.css";

export const Identify = () => {
  return (
    <section className="Identify">
      <SectionTitle title="PASE DE ENTRADA">
        <CiBookmarkCheck size={50} />
      </SectionTitle>
      <div className="identify--content">
        <p className="lato">
          Son muy importantes en nuestras vidas. Esperamos contar con su
          presencia
        </p>
        <ul>
          <li className="playwrite">David Lopez</li>
          <li className="playwrite">Reina Perdomo</li>
          <li className="playwrite">Karen Lopez</li>
        </ul>
        <span className="lato">
          Favor de confirmar dos semanas antes del evento (1 de marzo)
        </span>
        <div className="identify--content__buttons">
          <button className="lato">Numero de Janice</button>
          <button className="lato">Numero de Edmir</button>
        </div>
      </div>
    </section>
  );
};
