import { Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import PokemonsList from "./pages/PokemonsList";
import Header from "./components/ui/Header";
import PokemonInfo from "./pages/PokemonInfo";


function App() {
  const [pokemonDetailsUrl, setPokemonDetailsUrl] = useState('');

  const getPokemonDetailsUrl = (url) => {
    setPokemonDetailsUrl(url)
  };


  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/pokemons" />
          </Route>
          <Route path="/pokemons" exact>
            <PokemonsList onGetPokemonData={getPokemonDetailsUrl}/>
          </Route>
          <Route path="/pokemons/:pokemonId">
            <PokemonInfo url = {pokemonDetailsUrl}/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
