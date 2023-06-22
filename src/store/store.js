import { createStore, combineReducers } from 'redux';

import { reducerSelectedGenre } from './reducerSelectedGenre';
import { reducerSelectedCountry } from './reducerSelectedCountry';

const rootReduser = combineReducers(
    {
        selectedGenre: reducerSelectedGenre,
        selectedCountrie: reducerSelectedCountry,  
    }
);

const store = createStore(rootReduser);

export default store;