import { useState, useEffect } from "react";
import { Howl } from "howler";
import '../styles/buttonNavigation.css';

const ButtonNavigation = ({ isOff }) => {
  const [activeButton, setActiveButton] = useState(null);
  const [navigationButtonSound] = useState(
    new Howl({
      src: ["/soundsEffects/click-dpad.mp3"],
      volume: 1,
    })
  );

  const handleButtonClick = (direction) => {
    // Solo permite interacción si NO está apagado
    if (!isOff) {
      setActiveButton(direction);
      navigationButtonSound.play();

      // Usar requestAnimationFrame para un temporizador más preciso
      requestAnimationFrame(() => {
        setActiveButton(null);
      });
    }
  };

  // Cuando cambia isOff, asegurarse de que los botones estén completamente desactivados
  useEffect(() => {
    if (isOff) {
      setActiveButton(null);
    }
  }, [isOff]);

  return (
    <div className="dpad">
      <button
        className={`dpad-button
          ${activeButton === "up" && !isOff ? "active" : ""}
          ${!isOff ? "backlight" : "disabled"}`}
        onClick={() => handleButtonClick("up")}
        disabled={isOff}
      >
        ▲
      </button>
      <div className="dpad-l-r">
        <button
          className={`dpad-button
            ${activeButton === "left" && !isOff ? "active" : ""}
            ${!isOff ? "backlight" : "disabled"}`}
          onClick={() => handleButtonClick("left")}
          disabled={isOff}
        >
          ◀
        </button>
        <div className="dpad-center"></div>
        <button
          className={`dpad-button
            ${activeButton === "right" && !isOff ? "active" : ""}
            ${!isOff ? "backlight" : "disabled"}`}
          onClick={() => handleButtonClick("right")}
          disabled={isOff}
        >
          ▶
        </button>
      </div>
      <button
        className={`dpad-button
          ${activeButton === "down" && !isOff ? "active" : ""}
          ${!isOff ? "backlight" : "disabled"}`}
        onClick={() => handleButtonClick("down")}
        disabled={isOff}
      >
        ▼
      </button>
    </div>
  );
};

export default ButtonNavigation;