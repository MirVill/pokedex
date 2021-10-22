import { useState, useEffect,Fragment } from 'react';
import Axios from 'axios';
import PokemonItem from '../components/Pokemons/PokemonItem';
import classes from './PokemonsList.module.css'
import Input from '../components/ui/Input';

const PokemonsList = (props) => {
  const [pokemons, setPokemons ] = useState([]);
  const[searchInput, setSearchInput] = useState('');
  const [detailsUrl, setDetailsUrl] = useState('')

  const getPokemons = () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0").then(
      (res) =>
        setPokemons(
          res.data.results.map((data) => {
            return (
              <PokemonItem key={data.name} id={data.name} name={data.name} url={data.url} onGetDetailsUrl= {getDetailsUrl}/>
            );
          })
        )
    );
    
  };

  useEffect(() => {
    getPokemons()
  }, []);

  const getSearchedValue = (searchedValue) => {
    setSearchInput(searchedValue);
   };

  
  
  const pokemonsFiltered = pokemons.filter((pokemon) =>
  pokemon.props.name.startsWith(searchInput.toLowerCase())
  );
  const getDetailsUrl = (url) => {
    setDetailsUrl(url);
  }

  useEffect(() => {
    props.onGetPokemonData(detailsUrl);
  },[detailsUrl]); 
  
  console.log(detailsUrl);

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