import { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';
import Card from "../ui/Card";
import classes from './PokemonItem.module.css'
const PokemonItem = (props) => {
  const [imageLink, setImageLink] = useState('');
 
  const getPokemonData = useCallback(() => {
    Axios.get(props.url).then((res) =>
      setImageLink(res.data.sprites.other["official-artwork"]["front_default"])
    );
  },[props.url]);
  
  useEffect(() => {
    getPokemonData();
  }, [getPokemonData]);

  const string = props.name;
  const firstLetterToUppercase = (str) => {
   return str.charAt(0).toUpperCase() + str.slice(1); 
  };
  const transformedName = firstLetterToUppercase(string);


return (
  <Card >
    <img className={classes.img} src={imageLink} alt='Pokemon' />
    <div>{transformedName}</div>
  </Card>
);
};

export default PokemonItem;