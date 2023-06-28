import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { createSagaMiddleware } from 'redux-saga';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../saga/sagaRoot';

import { reducerSelectedGenre } from './reducerSelectedGenre';
import { reducerSelectedCountry } from './reducerSelectedCountry';
import { reducerListCountrys } from './reducerListCountries';
import { reducerListGenres } from './reducerListGenres';
import { reducerPremier } from './reducerPremier';
import { reducerTop } from './reducerTop';
import { reducerPagination } from './reducerPagination';


const sagaMiddleware = createSagaMiddleware();


const rootReduser = combineReducers(
    {
        selectedGenre: reducerSelectedGenre,
        selectedCountrie: reducerSelectedCountry,
        listCountries: reducerListCountrys,
        listGenres: reducerListGenres,
        listFilmsPremier: reducerPremier,
        listFilmsTop: reducerTop,
        pagination: reducerPagination,
    }
);

const store = createStore(rootReduser,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        (applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;