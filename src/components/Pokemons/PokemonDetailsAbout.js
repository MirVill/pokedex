import  Axios from "axios";
import { useState } from "react";
import { Fragment } from "react/cjs/react.development";
import classes from './PokemonDetailsAbout.module.css';

const PokemonDetailsAbout = (props) => {

  const [data, setData] =  useState({});

  Axios.get(props.url).then((res) =>
    setData({
      text: res.data["flavor_text_entries"][6]["flavor_text"],
      habitat: res.data.habitat.name.charAt(0).toUpperCase() +
      res.data.habitat.name.slice(1),
      happiness: res.data["base_happiness"],
      captureRate: res.data['capture_rate'],
      color: res.data.color.name.charAt(0).toUpperCase() +
      res.data.color.name.slice(1),
    })
  );
  console.log(data);
return <Fragment>  <div className={classes.about}>
  <div className={classes.header} >About</div>
  <div className={classes.list} >
    <div>Habitat: {data.habitat}</div>
    <div>Color: {data.color}</div>
    <div>Level of happiness: {data.happiness}</div>
    <div>Capture Rate: {data.captureRate}</div>
    </div>
  </div>
   <p className={classes.text} >{data.text}</p>
  </Fragment>
};

export default PokemonDetailsAbout; 