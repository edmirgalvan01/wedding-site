import { useEffect, useState } from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import { SectionTitle } from "../../components/SectionTitle";
import { supabase } from "../../database/supabase";
import "./Identify.css";

export const Identify = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    async function getPersons() {
      const { data } = await supabase.from("persons").select("*");
      setPersons(data);
    }

    getPersons();
  }, []);

  useEffect(() => {
    const id = document.baseURI.split("/")[3];

    if (id) {
      const filteredPersons = persons.filter((person) => person.family === id);
      console.log(filteredPersons);
    }
  }, [persons]);

  return (
    <section className="Identify">
      <SectionTitle title="PASE DE ENTRADA">
        <CiBookmarkCheck size={50} />
      </SectionTitle>
      <div className="identify--content">
        <p className="lato">
          Son muy importantes en nuestras vidas. Esperamos contar con su
          presencia
        </p>
        <ul>
          <li className="playwrite">David Lopez</li>
          <li className="playwrite">Reina Perdomo</li>
          <li className="playwrite">Karen Lopez</li>
        </ul>
        <span className="lato">
          Favor de confirmar dos semanas antes del evento (1 de marzo)
        </span>
        <div className="identify--content__buttons">
          <a className="lato" href="https://wa.link/x0nmss" target="blank">
            Numero de Janice
          </a>
          <a className="lato" href="https://wa.link/sncx34" target="blank">
            Numero de Edmir
          </a>
        </div>
      </div>
    </section>
  );
};
