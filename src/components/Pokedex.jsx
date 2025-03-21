import { useState } from "react";
import ButtonOpenPokedex from "./ButtonOpenPokedex";
import "../styles/pokedex.css";

const Pokedex = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="container">
      <div className="console">
        {/* Pantalla superior */}
        <div className={`top-screen ${isOpen ? "open" : "closed"}`}>
          <div className="screen-inner">
            <div className="screen-content"></div>
          </div>
        </div>

        {/* Pantalla inferior */}
        <div className="bottom-screen">
          <div className="bottom-screen-inner">
            <div className="bottom-screen-content">
              <ButtonOpenPokedex toggleOpen={toggleOpen} isOpen={isOpen} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pokedex;
