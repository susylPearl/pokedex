import { FETCH_START, FETCH_POKEMON_DETAIL } from '../actions/actionTypes';

const initialData = {
  status: 'default',
  profile: {}
};

const pokemonDetailsReducer = (state = initialData, action) => {
    switch (action.type) {
      case FETCH_START:
        return { ...state, status: 'loading' };
  
      case FETCH_POKEMON_DETAIL:
        return { ...state, status: 'completed', profile: action.payload.profile, species: action.payload.species };
        
      default:
        return state;
    }
}

export default pokemonDetailsReducer;