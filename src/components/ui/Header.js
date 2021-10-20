import { Fragment } from 'react/cjs/react.production.min';
import logo from '../../assets/pokemonLogo.png'
import classes from './Header.module.css'

const Header = () => {
return (
  <Fragment>
  <header className={classes.header} >
    <img className={classes.img} src={logo} alt='Pokemon logo'/>
  </header>
  </Fragment>
)
};

export default Header;