import '../styles/buttonOpenPokedex.css';
import { Howl } from "howler";
import { useEffect } from "react";

const ButtonOpenPokedex = ({ toggleOpen }) => {
  
  const soundOpenClose = new Howl({
    src: ["/soundsEffects/abrir-cerrar.mp3"],
    volume: 1,
  })

  const handleClick = () => {
    soundOpenClose.play();
    toggleOpen();
  }

  

  return <button className="button" onClick={handleClick}></button>;
};

export default ButtonOpenPokedex;
