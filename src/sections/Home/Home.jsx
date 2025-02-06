import assets from "../../assets/assets";
import "./Home.css";

export const Home = () => {
  return (
    <section className="contentPage HomePage">
      <h2 className="lato">¡Nos casamos!</h2>
      <h1 className="lato">Edmir y Janice</h1>
      <div className="versicle">
        <p className="lato">
          <em>
            Además, uno que anda solo puede ser vencido, pero dos juntos pueden
            hacerle frente al agresor. Y una cuerda triple no se rompe
            fácilmente
          </em>
        </p>
        <p className="lato">
          <strong>Eclesiastes 4:12</strong>
        </p>
      </div>
      <video src={assets.video} muted autoPlay={true} loop={true} />
    </section>
  );
};
