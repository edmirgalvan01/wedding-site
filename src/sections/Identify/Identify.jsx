import { CiBookmarkCheck } from "react-icons/ci";
import "./Identify.css";

export const Identify = () => {
  return (
    <section className="Identify">
      <div className="event--title">
        <CiBookmarkCheck size={50} />
        <p>PASE DE ENTRADA</p>
      </div>
      <div className="identify--content">
        <p>
          Son muy importantes en nuestras vidas. Esperamos contar con su
          presencia
        </p>
        <ul>
          <li>David Lopez</li>
          <li>Reina Perdomo</li>
          <li>Karen Lopez</li>
        </ul>
        <span>
          Favor de confirmar dos semanas antes del evento (1 de marzo)
        </span>
        <div className="identify--content__buttons">
          <button>Numero de Janice</button>
          <button>Numero de Edmir</button>
        </div>
      </div>
    </section>
  );
};
