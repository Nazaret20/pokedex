import "../styles/buttonOpenPokedex.css";
import { Howl } from "howler";

const soundOpenClose = new Howl({
  src: ["/soundsEffects/abrir-cerrar.mp3"],
  volume: 1,
});

const ButtonOpenPokedex = ({ toggleOpen }) => {
  const handleClick = () => {
    soundOpenClose.play();
    toggleOpen();
  };

  return <button className="button" onClick={handleClick}></button>;
};

export default ButtonOpenPokedex;
