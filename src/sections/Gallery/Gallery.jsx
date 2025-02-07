import "./Gallery.css";
import { CiCamera } from "react-icons/ci";
import { SectionTitle } from "../../components/SectionTitle";
import assets from "../../assets/assets";

export const Gallery = () => {
  return (
    <section className="contentPage Gallery">
      <SectionTitle title="GALERIA">
        <CiCamera size={50} />
      </SectionTitle>
      <div className="gallery--content">
        <p className="lato">
          Todo lo que hemos logrado no lo hubieramos podido hacer sin ti.
          Gracias por aportar sabiduria a nuestras vidas
        </p>
        <img src={assets.image4} alt="Fotografia de Edmir y Janice" />
        <img src={assets.image5} alt="Fotografia de Edmir y Janice" />
        <img src={assets.image7} alt="Fotografia de Edmir y Janice" />
        <img src={assets.image8} alt="Fotografia de Edmir y Janice" />
        <img src={assets.image9} alt="Fotografia de Edmir y Janice" />
        <img src={assets.image10} alt="Fotografia de Edmir y Janice" />
      </div>
    </section>
  );
};
