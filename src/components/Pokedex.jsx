import { useState } from "react";
import ButtonOpenPokedex from "./ButtonOpenPokedex";
import ButtonTurnOnOff from "./ButtonTurnOnOff";
import ButtonNavigation from "./ButtonNavigation";
import "../styles/pokedex.css";

const Pokedex = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOff, setIsOff] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="container">
      <div className="console">
        {/* ---------Pantalla superior-------- */}
        <div className={`top-screen ${isOpen ? "open" : "closed"}`}>
          <img
            className={`logo-pokedex ${isOpen ? "open" : ""}`}
            src="../images/pokedex-logo.svg"
            alt="Logo de Pokédex"
          />
          <div className="screen-inner">
            <div className={`screen-content ${isOff ? "off" : "on"}`}></div>
          </div>
        </div>

        <div className="center-console"></div>

        {/* ----------Pantalla inferior---------*/}
        <div className="bottom-screen">
          <ButtonOpenPokedex toggleOpen={toggleOpen} isOpen={isOpen} />
          <div className="bottom-screen-inner">
            <div className="pokedex-buttons">
              <div className="zoom"></div>
              <ButtonTurnOnOff isOff={isOff} setIsOff={setIsOff} />
              <ButtonNavigation isOff={isOff} />
            </div>
            <div className="bottom-screen-content"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pokedex;
