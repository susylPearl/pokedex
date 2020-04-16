import axios from 'axios';
import { FETCH_START, FETCH_POKEMON_DETAIL, POKEMON_ERROR } from '../actions/actionTypes';

export const fetchPokemonDetails = (id) => {
    return async dispatch => {
        dispatch({ type: FETCH_START });
        try {
          const res1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
          const res2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
          dispatch({ type: FETCH_POKEMON_DETAIL, payload: {profile: res1.data, species: res2.data} });
        } catch {
          dispatch({ type: POKEMON_ERROR });
        }
      }
};
