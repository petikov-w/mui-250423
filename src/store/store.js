import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { createSagaMiddleware } from 'redux-saga';
import createSagaMiddleware from 'redux-saga'

import { reducerSelectedGenre } from './reducerSelectedGenre';
import { reducerSelectedCountry } from './reducerSelectedCountry';
import { reducerListCountrys } from './reducerListCountries';
import  rootSaga  from './sagaCountries';

const sagaMiddleware = createSagaMiddleware();


const rootReduser = combineReducers(
    {
        selectedGenre: reducerSelectedGenre,
        selectedCountrie: reducerSelectedCountry, 
        listCountries: reducerListCountrys, 

    }
);

const store = createStore(rootReduser, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;