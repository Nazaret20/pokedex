import "../styles/pokedex.css";
import "../styles/buttonTurnOnOff.css";
import { useEffect } from "react";
import { Howl } from "howler";

const ButtonTurnOnOff = ({ isOff, setIsOff }) => {
  const soundOff = new Howl({
    src: ["/soundsEffects/apagar.mp3"],
    volume: 1,
  });

  const soundOn = new Howl({
    src: ["/soundsEffects/encender.mp3"],
    volume: 0.8,
  });

  const handleClick = () => {
    setIsOff(!isOff);
  };

  useEffect(() => {
    if (!isOff) {
      soundOn.play();
    } else {
      soundOff.play();
    }
  }, [isOff]);

  return (
    <button
      className={`button-turn-on-off ${isOff ? "turn-off" : "turn-on"}`}
      onClick={handleClick}
    >
      <img
        className="img-pokeball"
        src="../images/pokemon-ball.svg"
        alt="símbolo pokemon ball"
      />
    </button>
  );
};

export default ButtonTurnOnOff;
