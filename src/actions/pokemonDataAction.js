import axios from 'axios';
import { FETCH_START, FETCH_POKEMONS, POKEMON_ERROR } from './actionTypes';


export const fetchPokemonList = () => {
    return async dispatch => {
      dispatch({ type: FETCH_START });
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
        dispatch({ type: FETCH_POKEMONS, payload: response.data.results });
      } catch {
        dispatch({ type: POKEMON_ERROR });
      }
    };
};

export const clearPokemonList = () => {
  
};