import { combineReducers } from 'redux';
import pokemonDataReducer from './pokemonDataReducer';
import pokemonDetailsReducer from './pokemonDetailsReducer';
import pokemonSearchReducer from './pokemonSearchReducer';

export default combineReducers({
    pokemonList: pokemonDataReducer,
    pokemonDetails: pokemonDetailsReducer,
    searchedList: pokemonSearchReducer
});