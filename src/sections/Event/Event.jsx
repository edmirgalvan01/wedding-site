import { CiBrightnessDown } from "react-icons/ci";
import { SectionTitle } from "../../components/SectionTitle";
import "./Event.css";

export const Event = () => {
  return (
    <section className="Event">
      <SectionTitle title="CELEBRACION">
        <CiBrightnessDown size={50} />
      </SectionTitle>
      <div className="event--content">
        <p className="lato">
          No podemos dejar pasar la oportunidad. Celebra este importante suceso
          con nosotros
        </p>
        <div className="event--content__date">
          <p className="afacad">15 MAR</p>
          <div className="divider"></div>
          <p className="afacad">16:30</p>
        </div>
        <span className="lato">
          20, 534265, -97.320995, 93260 Papantla, Ver.
        </span>
        <a
          href="https://maps.app.goo.gl/VQGxaq4D3jmWoG3u9"
          target="blank"
          className="lato"
        >
          Ver ubicacion
        </a>
      </div>
    </section>
  );
};
