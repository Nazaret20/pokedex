
import "../styles/cardPokemon.css";

const CardPokemon = () => {
	return (
		<div className="card-pokemon">
            {/* <img className="card-pokemon-img" src="" alt="Pokemon image" /> */}
			<div className="card-pokemon-data">
				<h2 className="card-pokemon-h2">Name</h2>
				<p className="card-pokemon-p">Id: id</p>
			</div>
		</div>
	);
};

export default CardPokemon;
