import { CiGift } from "react-icons/ci";
import "./Gifts.css";

export const Gifts = () => {
  return (
    <section className="Gifts">
      <div className="event--title">
        <CiGift size={50} />
        <p>REGALOS</p>
      </div>
      <div className="gifts--content">
        <p>
          El mejor regalo es compartir con nosotros este día tan especial, pero
          si desean ayudarnos, agradeceremos cualquier aporte en efectivo, que
          será de gran utilidad para comenzar nuestra nueva vida
        </p>
        <span>
          En la entrada del salon de eventos habra una cajita en donde podran
          poner sus aportaciones
        </span>
      </div>
    </section>
  );
};
