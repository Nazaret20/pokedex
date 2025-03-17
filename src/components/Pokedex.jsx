import "../styles/pokedex.css";

import { useState } from "react";

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
						<div className="screen-content">
							<span className="screen-text">NINTENDO DS</span>
						</div>
					</div>
				</div>

				{/* Pantalla inferior */}
				<div className="bottom-screen">
					<div className="screen-inner">
						<div className="screen-content">
							<button className="button" onClick={toggleOpen}>
								{isOpen ? "Cerrar" : "Abrir"}
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Botón para abrir/cerrar */}
		</section>
	);
};

export default Pokedex;
