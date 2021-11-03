import Axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PokemonDetailsBaseStat from "./PokemonDetailsBaseStat";
import PokemonDetailsHeader from "./PokemonDetailsHeader";
import classes from './PokemonDetailsItem.module.css';
import PokemonDetailsAbout from "./PokemonDetailsAbout";



const PokemonDetailsItem = (props) => {
const [details, setDetails] = useState({});


    const getDetails = () => {
        Axios.get(props.url).then((res) =>
          setDetails({
            id: res.data.id,
            name:
              res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
            order: res.data.order,
            weight: res.data.weight,
            height: res.data.height,
            experience: res.data["base_experience"],
            image: res.data.sprites.other["dream_world"]["front_default"],
            backImage: res.data.sprites["back_shiny"],
            abilities: res.data.abilities.map((ability) => (
              <div className={classes.ability} key={ability.ability.name} >
                {ability.ability.name.charAt(0).toUpperCase() +
                  ability.ability.name.slice(1)}
              </div>
            )),
            types: res.data.types.map((type) => (
              <li key={type.type.name} >
                {type.type.name.charAt(0).toUpperCase() +
                  type.type.name.slice(1)}
              </li>
            )),
            stats: res.data.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name.charAt(0).toUpperCase() +
                  stat.stat.name.slice(1)}
                : {stat["base_stat"]}
              </li>
            )),
            text:<PokemonDetailsAbout url={res.data.species.url} /> 
          })
        );
    };

useEffect(() => {
    getDetails()
}, []);
    
    return (
      <Fragment>
        <PokemonDetailsHeader
          name={details.name}
          order={details.order}
          experience={details.experience}
          weight={details.weight}
          height={details.height}
          id={details.id}
          image={details.image}
        />
        <h2 className={classes.title}>Types</h2>
        <div className={classes.type}>
          <ul>{details.types}</ul>
        </div>
        <div className={classes.data}>
          <PokemonDetailsBaseStat stats={details.stats} />
          <div className={classes.description}>
            {details.text}
            <div className={classes.abilitiesContainer}>{details.abilities}</div>
          </div>
        </div>
        <div className={classes.btnContainer}>
          <NavLink className={classes.link} to="/pokemons">
            <img
              className={classes.backImage}
              src={details.backImage}
              alt="pokemon back"
            />
            <div className={classes.button}>All pokemons</div>
          </NavLink>
        </div>
      </Fragment>
    );
};

export default PokemonDetailsItem;