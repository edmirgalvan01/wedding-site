import { SectionTitle } from "../../components/SectionTitle";
import { CiTimer } from "react-icons/ci";
import "./History.css";
import assets from "../../assets/assets";

export const History = () => {
  return (
    <section className="History">
      <SectionTitle title="HISTORIA">
        <CiTimer size={50} />
      </SectionTitle>
      <div className="history--picture">
        <span className="lato">Nos hicimos novios</span>
        <h3 className="lato">30 DE JULIO DEL 2023</h3>
        <img
          src={assets.relationship}
          alt="Foto de Edmir y Janice cuando se hicieron novios"
        />
      </div>
      <div className="history--picture">
        <span className="lato">Nos comprometimos</span>
        <h3 className="lato">7 DE ENERO DEL 2024</h3>
        <img
          src={assets.compromise}
          alt="Foto de Edmir y Janice cuando se comprometieron"
        />
      </div>
      <div className="history--picture">
        <span className="lato">Nos casaremos</span>
        <h3 className="lato">15 DE MARZO DEL 2025</h3>
        <img src={assets.now} alt="Foto de Edmir y Janice en la actualidad" />
      </div>
    </section>
  );
};
