import { createStore, combineReducers } from 'redux';

import { reducerSelectedGenre } from './reducerSelectedGenre';
import { reducerSelectedCountrie } from './reducerSelectedCountrie';

const rootReduser = combineReducers(
    {
        selectedGenre: reducerSelectedGenre,
        selectedCountrie: reducerSelectedCountrie,  
    }
);

const store = createStore(rootReduser);

export default store;