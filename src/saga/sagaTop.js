import { put, call, takeEvery, select } from 'redux-saga/effects';

import { fetchQueryFromApi } from '../components/Api';


const url_api = 'https://kinopoiskapiunofficial.tech/api/';
const version_api = 'v2.1/films/';
const dataset = 'top?';
const listTop = [  {id: ' TOP_250_BEST_FILMS', top: 'Топ лучших фильмов'}, 
                   {id: 'TOP_100_POPULAR_FILMS', top: 'Топ популярных фильмов'} , 
                   {id: 'TOP_AWAIT_FILMS', top: 'Топ ожидаемых фильмов'}  ];


function* workerTop({ payload }) {
    const { page } = payload;

    // Формирование поискового запроса
    const paramsQ = new URLSearchParams({
        page: '',
    });

    // Сформированный запрос
    const query = `${url_api}${version_api}${dataset}${paramsQ}${page}`;

    yield takeEvery('TOOGLE_ISFETCHING', false);
    const dataFilmsTop = yield call(fetchQueryFromApi, query);
    yield takeEvery('TOOGLE_ISFETCHING', true);

    yield put({ type: 'SET_FILMS', payload: dataFilmsTop.films });
    // yield put({ type: 'SET_FILMS_TOP', payload: dataFilmsTop.films });
    yield put({ type: 'SET_PAGES_COUNT', payload: dataFilmsTop.pagesCount });
}


export function* watchFilmsTop() {
    yield takeEvery('FILMS_TOP', workerTop);
}