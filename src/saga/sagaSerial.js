import { put, call, takeEvery, select } from 'redux-saga/effects';

import { fetchQueryFromApi } from '../components/Api';


const url_api = 'https://kinopoiskapiunofficial.tech/api/';
const version_api = 'v2.2/';
const dataset = 'films?';

function* workerSerial({ payload }) {
    const { page, country, genre } = payload;
    const page22 = yield select((state)=> state.pagination.page);
    const currentYear = new Date().getFullYear();

    const scountry = JSON.stringify(country) === '{}' ? '34' : `${country.id}`;
    const sgenre = JSON.stringify(genre) === '{}' ? '2' : `${genre.id}`;
    // Формирование поискового запроса
    const paramsQ = new URLSearchParams({
        countries: scountry,
        genres: sgenre,
        order: 'RATING',
        type: 'TV_SERIES',
        ratingFrom: '0',
        ratingTo: '10',
        yearFrom: '2000',
        yearTo: currentYear,
        page: '',
    });
    // Сформированный запрос
    const query = `${url_api}${version_api}${dataset}${paramsQ}${page22}`;

    yield put({ type: 'TOOGLE_ISFETCHING', payload: true });
    const dataFilmsSerial = yield call(fetchQueryFromApi, query);
    yield put({ type: 'TOOGLE_ISFETCHING', payload: false });

    yield put({ type: 'SET_FILMS', payload: dataFilmsSerial.items });
    // yield put({ type: 'SET_FILMS_SERIAL', payload: dataFilmsSerial.items });
    yield put({ type: 'SET_PAGES_COUNT', payload: dataFilmsSerial.totalPages });
}


export function* watchFilmsSerial() {
    yield takeEvery('FILMS_SERIAL', workerSerial);
}