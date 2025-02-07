import { useEffect, useState } from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import { SectionTitle } from "../../components/SectionTitle";
import { supabase } from "../../database/supabase";
import "./Identify.css";

export const Identify = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);

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
      setFilteredPersons(filteredPersons);
    }
  }, [persons]);

  return (
    <section className="Identify">
      <SectionTitle title="PASE DE ENTRADA">
        <CiBookmarkCheck size={50} />
      </SectionTitle>
      <div className="identify--content">
        <p className="lato">
          Tu presencia es nuestro regalo mas preciado. Por eso, la invitacion es
          personal e intransferible.
        </p>
        <ul>
          {filteredPersons.length > 0 ? (
            filteredPersons.map((person) => (
              <li className="lato" key={person.id}>
                {person.name}
              </li>
            ))
          ) : (
            <p className="lato error-message">
              No se han podido encontrar los nombres. Intentelo de nuevo.
            </p>
          )}
        </ul>
        <span className="lato">
          Favor de confirmar dos semanas antes del evento (1 de marzo)
        </span>
        <span className="lato">
          Nuestra boda será un reflejo de nuestro estilo de vida, celebrando sin
          bebidas alcoholicas.{" "}
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
