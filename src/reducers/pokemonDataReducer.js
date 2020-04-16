import { FETCH_START, FETCH_POKEMONS, POKEMON_ERROR } from '../actions/actionTypes';

const initialData = {
  status: 'default',
  pokemons: {}
};

const pokemonDataReducer = (state = initialData, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, status: 'loading' };

    case FETCH_POKEMONS:
      return { ...state, status: 'completed', pokemonList: action.payload };

    case POKEMON_ERROR:
      return { ...state, status: 'error' }

    default:
      return state;
  }
}

export default pokemonDataReducer;