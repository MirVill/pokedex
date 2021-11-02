import Axios from "axios";
import { Fragment, useEffect, useState } from "react";
import PokemonDetailsHeader from "./PokemonDetailsHeader";



const PokemonDetailsItem = (props) => {
const [details, setDetails] = useState({});

    const getDetails = () => {
        Axios.get(props.url).then(res => setDetails(
           {id: res.data.id,
            name: res.data.name, 
            order: res.data.order, 
            weight: res.data.weight, 
            height: res.data.height,
            experience: res.data['base_experience'],
            image: res.data.sprites.other['dream_world']['front_default'],
            abilities: res.data.abilities.map(ability=> <li>{ability.ability.name}</li>),
            types: res.data.types.map(type => type.type.name),
            moves: res.data.moves.map(move=> <li>{move.move.name}</li>),
            stats: res.data.stats.map(stat => <li>{stat.stat.name}: {stat['base_stat']}</li>)
         }))
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
          <div>
            <ul>Type: {details.types}</ul>
            <ul>Abilities: {details.abilities}</ul>
            <ul>Base Stat: {details.stats}</ul>
          </div>
        
      </Fragment>
    );
};

export default PokemonDetailsItem;