import { useState } from "react";
import ButtonOpenPokedex from "./ButtonOpenPokedex";
import ButtonTurnOnOff from "./ButtonTurnOnOff";
import "../styles/pokedex.css";

const Pokedex = () => {
  const [isOpen, setIsOpen] = useState(true);

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

        <div className="center-console"></div>

        {/* Pantalla inferior */}
        <div className="bottom-screen">
          <ButtonOpenPokedex toggleOpen={toggleOpen} isOpen={isOpen} />
          <div className="bottom-screen-inner">
            <ButtonTurnOnOff />
            <div className="bottom-screen-content"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pokedex;
