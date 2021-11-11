import { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import PokemonItem from "./PokemonItem";
import classes from "./PokemonsList.module.css";
import Input from "../ui/Input";

const PokemonsList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getPokemons = () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0").then(
      (res) =>
        setPokemons(
          res.data.results.map((data) => {
            return {
              key: data.name,
              id: data.name,
              name: data.name,
              url: data.url,
            };
          })
        )
    );
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const pokemonsList = pokemons.map((pokemon) => {
    return (
      <PokemonItem
        key={pokemon.name}
        id={pokemon.name}
        name={pokemon.name}
        url={pokemon.url}
      />
    );
  });

  const getSearchedValue = (searchedValue) => {
    setSearchInput(searchedValue);
  };

  const pokemonsFiltered = pokemonsList.filter((pokemon) =>
    pokemon.props.name.startsWith(searchInput.toLowerCase())
  );

  return (
    <Fragment>
      <Input onSearch={getSearchedValue} />
      <div className={classes.list}>
        {searchInput ? pokemonsFiltered : pokemonsList}
      </div>
    </Fragment>
  );
};

export default PokemonsList;
