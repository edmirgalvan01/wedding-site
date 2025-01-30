import "./History.css";
import { CiTimer } from "react-icons/ci";

export const History = () => {
  return (
    <section className="History">
      <div className="history--title">
        <CiTimer size={50} />
        <p>HISTORIA</p>
      </div>
      <div className="history--picture">
        <span>Nos hicimos novios</span>
        <h3>30 DE JULIO DEL 2023</h3>
        <img
          src="https://plus.unsplash.com/premium_photo-1700353612860-bd8ab8d71f05?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Foto de Edmir y Janice cuando se hicieron novios"
        />
      </div>
      <div className="history--picture">
        <span>Nos comprometimos</span>
        <h3>7 DE ENERO DEL 2024</h3>
        <img
          src="https://plus.unsplash.com/premium_photo-1700353612860-bd8ab8d71f05?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Foto de Edmir y Janice cuando se comprometieron"
        />
      </div>
      <div className="history--picture">
        <span>Nos casaremos</span>
        <h3>15 DE MARZO DEL 2025</h3>
        <img
          src="https://plus.unsplash.com/premium_photo-1700353612860-bd8ab8d71f05?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Foto de Edmir y Janice en la actualidad"
        />
      </div>
    </section>
  );
};
