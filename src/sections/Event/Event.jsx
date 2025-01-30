import { BiParty } from "react-icons/bi";
import { SectionTitle } from "../../components/SectionTitle";
import "./Event.css";

export const Event = () => {
  return (
    <section className="Event">
      <SectionTitle title="CELEBRACION">
        <BiParty size={50} />
      </SectionTitle>
      <div className="event--content">
        <p className="lato">
          No podemos dejar pasar la oportunidad. Celebra este importante suceso
          con nosotros
        </p>
        <div className="event--content__date">
          <p>15 MAR</p>
          <div className="divider"></div>
          <p>16:30</p>
        </div>
        <span className="lato">
          2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
        </span>
        <button>Ver ubicacion</button>
      </div>
    </section>
  );
};
