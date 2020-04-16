import axios from "axios";
import _ from 'underscore';
import { SEARCH_BY_NAME, SEARCH_BY_GENDER, SEARCH_BY_HABITAT, SEARCH_BY_COLOR, CLEAR_SEARCH, POKEMON_ERROR } from '../actions/actionTypes';


export const submitSearch = (filterValue, searchKey, pokemonList) => {
  switch (filterValue) {
    case SEARCH_BY_NAME:
      return {
        type: filterValue,
        payload: {
          searchKey: searchKey,
          pokemonList: pokemonList,
        },
      };
    case SEARCH_BY_GENDER:
    case SEARCH_BY_HABITAT:
    case SEARCH_BY_COLOR:
      return async (dispatch) => {
        try {
          if(searchKey.length > 5) {
            let response= await axios.get(`https://pokeapi.co/api/v2/${filterValue}/${searchKey}`);
            let responseData = _.isEqual(filterValue, SEARCH_BY_GENDER) ? _.pluck(response.data.pokemon_species_details.slice(0, 149), 'pokemon_species')
                                : response.data.pokemon_species;
            dispatch({ type: filterValue, payload:  responseData });
          } 
        } catch {
          dispatch({ type: POKEMON_ERROR });
        }
      };
      default:
          return {};
  }
};

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH,
    payload: {},
  };
};
