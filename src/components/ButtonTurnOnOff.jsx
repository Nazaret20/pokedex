import "../styles/pokedex.css";
import "../styles/buttonTurnOnOff.css";
import { Howl } from "howler";

const soundOff = new Howl({
  src: ["/soundsEffects/apagar.mp3"],
  volume: 1,
});

const soundOn = new Howl({
  src: ["/soundsEffects/encender.mp3"],
  volume: 0.8,
});

const ButtonTurnOnOff = ({ isOff, setIsOff }) => {
  const handleClick = () => {
    if (isOff) {
      soundOn.play();
    } else {
      soundOff.play();
    }

    setIsOff(!isOff);
  };

  return (
    <button
      className={`button-turn-on-off ${isOff ? "turn-off" : "turn-on"}`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800px"
        height="800px"
        viewBox="0 0 48.00 48.00"
        className="img-pokeball"
      >
        <circle
          cx="23.99"
          cy="23.99"
          r="8"
          fill="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.83,27.75c1.77,10.08,10.57,17.74,21.16,17.74s19.39-7.66,21.16-17.74h-8.71c-1.61,5.35-6.58,9.24-12.45,9.24s-10.84-3.89-12.45-9.24H2.83Z"
          fill="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.82,20.25C4.59,10.16,13.4,2.49,23.99,2.49s19.4,7.67,21.17,17.76h-8.71c-1.61-5.36-6.58-9.26-12.46-9.26s-10.85,3.9-12.46,9.26H2.82Z"
          fill="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default ButtonTurnOnOff;
