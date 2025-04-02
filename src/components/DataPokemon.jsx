import { useState, useEffect } from "react";
import CardPokemon from "./CardPokemon";
import "../styles/dataPokemon.css";

const DataPokemon = () => {
	const [pokemons, setPokemons] = useState(null);
	const urlPokemonAPI = "https://pokeapi.co/api/v2/pokemon/";

	const fetching = async (id) => {
		try {
			const response = await fetch(`${urlPokemonAPI}${id}`);
			const data = response.json();
            console.log(data)
			setPokemons(data);
		} catch {
			console.error("Error fetching data");
		}
	};

	useEffect(() => {
		fetching(1);
	}, []);

	return (
		<section className="screen-pokemon-data">
			<CardPokemon />
			<CardPokemon />
			<CardPokemon />
			<CardPokemon />
			<CardPokemon />

		</section>
	);
};

export default DataPokemon;
