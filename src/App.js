import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import './App.css';

const App = () => {
  return(
      <div className="App">
        <Switch>
          <Route exact path='/' component={PokemonList} />
          <Route exact path='/pokemon/:id' component={PokemonDetails} />
        </Switch>
      </div>
  );

};

export default App;
