import "../styles/pokedex.css";
import { useState } from "react";
import '../styles/buttonTurnOnOff.css'

const ButtonTurnOnOff = () => {
    return (
        <button className="button-turn-on-off"><img className="img-pokeball" src="../images/pokemon-ball.svg" alt="símbolo pokemon ball"/></button>
    )
};

export default ButtonTurnOnOff;
