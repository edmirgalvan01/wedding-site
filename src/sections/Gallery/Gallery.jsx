import "./Gallery.css";
import { CiCamera } from "react-icons/ci";
import { SectionTitle } from "../../components/SectionTitle";

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
        <img src="src/assets/image1.JPG" alt="Fotografia de Edmir y Janice" />
        <img src="src/assets/image2.jpg" alt="Fotografia de Edmir y Janice" />
        <img src="src/assets/image3.jpg" alt="Fotografia de Edmir y Janice" />
        <img src="src/assets/image4.jpg" alt="Fotografia de Edmir y Janice" />
        <img src="src/assets/image5.jpg" alt="Fotografia de Edmir y Janice" />
        <img src="src/assets/image6.jpg" alt="Fotografia de Edmir y Janice" />
        <img src="src/assets/image7.jpg" alt="Fotografia de Edmir y Janice" />
        <img src="src/assets/image8.jpg" alt="Fotografia de Edmir y Janice" />
        <img src="src/assets/image9.jpg" alt="Fotografia de Edmir y Janice" />
        <img src="src/assets/image10.jpg" alt="Fotografia de Edmir y Janice" />
      </div>
    </section>
  );
};
