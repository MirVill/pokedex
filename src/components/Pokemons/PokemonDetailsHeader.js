import classes from "./PokemonDetailsHeader.module.css";

const PokemonDetailsHeader = (props) => {
  return (
    <div className={classes.details}>
      <h1 className={classes.number}>No.{props.id}</h1>
      <div className={classes.content}>
        <h1>{props.name}</h1>
        <ul>
          <li>
            Order <br /> {props.order}{" "}
          </li>
          <li>
            Base Experience <br /> {props.experience}
          </li>
          <li>
            Weight <br /> {props.weight}
          </li>
          <li>
            Height <br /> {props.height}
          </li>
        </ul>
      </div>
      <div>
        <img src={props.image} alt="Pokemon" />
      </div>
    </div>
  );
};

export default PokemonDetailsHeader;
