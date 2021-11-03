import classes from './PokemonDetailsAbilities.module.css';

const PokemonDetailsAbilities = (props) => {
 
 return (<div className={classes.container} >
   {props.abilities}
 </div>)
 
};

export default PokemonDetailsAbilities;