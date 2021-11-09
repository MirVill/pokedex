import { useParams } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import classes from "./PokemonInfo.module.css";
import PokemonDetailsItem from "./PokemonDetailsItem";

const PokemonInfo = (props) => {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const { pokemonId } = useParams();

  const getData = () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0").then(
      (res) =>
        setPokemonDetails(
          res.data.results.map((data) => (
            <PokemonDetailsItem
              key={data.name}
              url={data.url}
              name={data.name}
            />
          ))
        )
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const pokemonDetailsFiltered = pokemonDetails.filter(
    (pokemon) => pokemon.key === pokemonId
  );

  return (
    <div className={classes.container}>
      <div>{pokemonDetailsFiltered}</div>
    </div>
  );
};

export default PokemonInfo;
