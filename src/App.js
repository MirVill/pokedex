import { Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import AllPokemons from "./pages/AllPokemons";
import Header from "./components/ui/Header";
import PokemonDetails from "./pages/PokemonDetails";


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
            <AllPokemons />
          </Route>
          <Route path="/pokemons/:pokemonId">
            <PokemonDetails/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
