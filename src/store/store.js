import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { createSagaMiddleware } from 'redux-saga';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../saga/sagaRoot';

import { reducerFilms } from './reducerFilms';
import { reducerLists } from './reducerLists';
import { reducerFilters } from './reducerFilters';
import { reducerSettings } from './reducerSettings';
import { reducerPagination } from './reducerPagination';
import { reducerIsFetching } from './reducerIsFetching';

const sagaMiddleware = createSagaMiddleware();

const rootReduser = combineReducers(
    {
        listFilms: reducerFilms,
        setLists: reducerLists,
        filters: reducerFilters,
        settings: reducerSettings,
        pagination: reducerPagination,        
        isFetching: reducerIsFetching,
    }
);

const store = createStore(rootReduser,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        (applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;