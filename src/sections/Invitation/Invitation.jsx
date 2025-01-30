/* eslint-disable react/prop-types */

import "./Invitation.css";
import Countdown from "react-countdown";

const Timer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="invitation--timer__content">
      <div className="timer--item">
        <div className="timer--item__number">{days}</div>
        <span className="lato">Dias</span>
      </div>
      <div className="timer--item">
        <div className="timer--item__number">{hours}</div>
        <span className="lato">Horas</span>
      </div>
      <div className="timer--item">
        <div className="timer--item__number">{minutes}</div>
        <span className="lato">Minutos</span>
      </div>
      <div className="timer--item">
        <div className="timer--item__number">{seconds}</div>
        <span className="lato">Segundos</span>
      </div>
    </div>
  );
};

export const Invitation = () => {
  const weddingDate = new Date(2025, 2, 15, 17, 0);

  return (
    <section className=" Invitation">
      <div className="invitation--title">
        <h1 className="playwrite">¡Estas invitado!</h1>
        <p className="lato">
          Queremos que seas parte de este momento tan especial en nuestras vidas
        </p>
      </div>
      <div className="invitation--date">
        <span className="playwrite">¡Anota la gran fecha!</span>
        <h1 className="afacad">15 de marzo del 2025</h1>
      </div>
      <div className="invitation--timer">
        <span className="playwrite">Faltan solamente</span>
        <Countdown date={weddingDate} renderer={Timer} />
      </div>
    </section>
  );
};
