import { SEARCH_BY_NAME, SEARCH_BY_GENDER, SEARCH_BY_HABITAT, SEARCH_BY_COLOR, CLEAR_SEARCH } from '../actions/actionTypes';

const initialData = {
    text: 'empty',
    searchedList: {}
}
const pokemonSearchReducer = (state = initialData, action) => {
    switch(action.type){
        case SEARCH_BY_NAME:
            const list = action.payload.pokemonList.flat().filter(item => {
                let title = item.name.toLowerCase();
                return title.indexOf(action.payload.searchKey.toLowerCase()) > -1;
              });
              return { ...state, text: 'Searched', searchedList: list };
    
        case SEARCH_BY_GENDER:
        case SEARCH_BY_HABITAT:
        case SEARCH_BY_COLOR:
              return { ...state, text: 'Searched', searchedList: action.payload };

        case CLEAR_SEARCH:
        default:
            return initialData;
    }
};

export default pokemonSearchReducer;