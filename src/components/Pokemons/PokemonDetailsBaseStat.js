import classes from './PokemonDetailsBaseStats.module.css';

const PokemonDetailsBaseStat = (props) => {
return (
  <div className={classes.stats}>
    <div className={classes.header} >Stats</div>
     <ul>{props.stats}</ul>
  </div>
);
};

export default PokemonDetailsBaseStat;