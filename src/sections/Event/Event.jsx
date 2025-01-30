import { BiParty } from "react-icons/bi";
import "./Event.css";

export const Event = () => {
  return (
    <section className="Event">
      <div className="event--title">
        <BiParty size={50} />
        <p>CELEBRACION</p>
      </div>
      <div className="event--content">
        <p>
          No podemos dejar pasar la oportunidad. Celebra este importante suceso
          con nosotros
        </p>
        <div className="event--content__date">
          <p>15 MAR</p>
          <div className="divider"></div>
          <p>16:30</p>
        </div>
        <span>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
        <button>Ver ubicacion</button>
      </div>
    </section>
  );
};
