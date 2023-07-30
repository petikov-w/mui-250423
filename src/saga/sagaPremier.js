import { put, call, takeEvery } from 'redux-saga/effects';

import { fetchQueryFromApi } from '../components/Api';

const url_api = 'https://kinopoiskapiunofficial.tech/api/';
const version_api = 'v2.2/films/';
const dataset = 'premieres?';
const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 
                'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

export function* workerPremieres() {
    // Формирование поискового запроса
    const paramsQ = new URLSearchParams({
        year: currentYear,
        month: months[currentMonth],
    });
    // Сформированный запрос
    const query = `${url_api}${version_api}${dataset}${paramsQ}`;

    yield put({ type: 'TOOGLE_ISFETCHING', payload: true });
    const dataFilmsPremieres = yield call(fetchQueryFromApi, query);
    yield put({ type: 'TOOGLE_ISFETCHING', payload: false });

    yield put({ type: 'SET_FILMS', payload: dataFilmsPremieres.items });
    // yield put({ type: 'SET_FILMS_PREMIER', payload: dataFilmsPremieres.items });
}

export function* watchFilmsPremieres() {
    yield takeEvery('FILMS_PREMIER', workerPremieres);
}
