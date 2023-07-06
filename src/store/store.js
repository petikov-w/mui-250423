import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { createSagaMiddleware } from 'redux-saga';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../saga/sagaRoot';


import { reducerListCountrys } from './reducerListCountries';
import { reducerListGenres } from './reducerListGenres';
import { reducerFilms } from './reducerFilms';
import { reducerPagination } from './reducerPagination';
import { reducerIsFetching } from './reducerIsFetching';
import { reducerFilters } from './reducerFilters';
import { reducerSettings } from './reducerSettings';


const sagaMiddleware = createSagaMiddleware();


const rootReduser = combineReducers(
    {
        settings: reducerSettings,
        listCountries: reducerListCountrys,
        listGenres: reducerListGenres,
        pagination: reducerPagination,
        filters: reducerFilters,
        isFetching: reducerIsFetching,
        listFilms: reducerFilms,
    }
);

const store = createStore(rootReduser,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        (applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;