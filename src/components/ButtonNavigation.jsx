import { useState } from "react";
import { Howl } from "howler";
import "../styles/buttonNavigation.css";

const navigationButtonSound = new Howl({
  src: ["/soundsEffects/click-dpad.mp3"],
  volume: 1,
});

const ButtonNavigation = ({ isOff }) => {
  const handleButtonClick = (direction) => {
    setActiveButton(direction);
    navigationButtonSound.play();
  };

  return (
    <div className="dpad">
      <button
        className={`dpad-button ${!isOff === "up" ? "active" : ""}`}
        onClick={() => handleButtonClick("up")}
      >
        ▲
      </button>
      <div className="dpad-l-r">
        <button
          className={`dpad-button ${!isOff === "left" ? "active" : ""}`}
          onClick={() => handleButtonClick("left")}
        >
          ◀
        </button>
        <div className="dpad-center"></div>
        <button
          className={`dpad-button ${!isOff === "right" ? "active" : ""}`}
          onClick={() => handleButtonClick("right")}
        >
          ▶
        </button>
      </div>
      <button
        className={`dpad-button ${!isOff === "down" ? "active" : ""}`}
        onClick={() => handleButtonClick("down")}
      >
        ▼
      </button>
    </div>
  );
};

export default ButtonNavigation;
