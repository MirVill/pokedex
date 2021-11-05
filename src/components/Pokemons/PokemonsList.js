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
            return (
              <PokemonItem
                key={data.name}
                id={data.name}
                name={data.name}
                url={data.url}
              />
            );
          })
        )
    );
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const getSearchedValue = (searchedValue) => {
    setSearchInput(searchedValue);
  };

  const pokemonsFiltered = pokemons.filter((pokemon) =>
    pokemon.props.name.startsWith(searchInput.toLowerCase())
  );

  return (
    <Fragment>
      <Input onSearch={getSearchedValue}/>
      <div className={classes.list}>
        {searchInput ? pokemonsFiltered : pokemons}
      </div>
    </Fragment>
  );
};

export default PokemonsList;
