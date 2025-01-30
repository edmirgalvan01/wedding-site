import "./Gifts.css";
import { CiGift } from "react-icons/ci";
import { SectionTitle } from "../../components/SectionTitle";

export const Gifts = () => {
  return (
    <section className="Gifts">
      <SectionTitle title="GALERIA">
        <CiGift size={50} />
      </SectionTitle>
      <div className="gifts--content">
        <p className="lato">
          El mejor regalo es compartir con nosotros este día tan especial, pero
          si desean ayudarnos, agradeceremos cualquier aporte en efectivo, que
          será de gran utilidad para comenzar nuestra nueva vida
        </p>
        <span className="lato">
          En la entrada del salon de eventos habra una cajita en donde podran
          poner sus aportaciones
        </span>
      </div>
    </section>
  );
};
