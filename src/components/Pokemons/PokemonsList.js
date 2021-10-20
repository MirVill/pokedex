import { useState, useEffect,useCallback } from 'react';
import Axios from 'axios';
import PokemonItem from './PokemonItem';
import classes from './PokemonsList.module.css'
import { Fragment } from 'react/cjs/react.production.min';
import Input from '../ui/Input';

const PokemonsList = () => {
  const [pokemons, setPokemons ] = useState([]);
  const[searchInput, setSearchInput] = useState('');

  const getPokemons = useCallback (() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0").then(
      (res) =>
        setPokemons(
          res.data.results.map((data) => {
            return (
              <PokemonItem key={data.name} name={data.name} url={data.url} />
            );
          })
        )
    );
    
  },[])

  useEffect(() => {
    getPokemons()
  }, [getPokemons]);

  const getSearchedValue = useCallback ((searchedValue) => {
    setSearchInput(searchedValue);
   }, []);
  
  const pokemonsFiltered = pokemons.filter((pokemon) =>
  pokemon.props.name.startsWith(searchInput.toLowerCase())
  );
   

  return (
    <Fragment>
      <Input onSearch={getSearchedValue} />
    <div className={classes.list}>
      {!searchInput && pokemons}
      {searchInput && pokemonsFiltered}
    </div>
    </Fragment>
  );
};

export default PokemonsList;