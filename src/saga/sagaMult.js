import { put, call, takeEvery } from 'redux-saga/effects';

import { fetchQueryFromApi } from '../components/Api';



const url_api = 'https://kinopoiskapiunofficial.tech/api/';
const version_api = 'v2.2/';
const dataset = 'films?';

function* workerMult({ payload }) {
    const { page, country } = payload;

    const scountry = JSON.stringify(country) === '{}' ? '33' : `${country.id}`;
    // Формирование поискового запроса
    const paramsQ = new URLSearchParams({
        countries: scountry,
        genres: '18',
        order: 'RATING',
        type: 'ALL',
        ratingFrom: '0',
        ratingTo: '10',
        yearFrom: '1940',
        yearTo: '2023',
        page: '',
    });
    // Сформированный запрос
    const query = `${url_api}${version_api}${dataset}${paramsQ}${page}`;

    yield takeEvery('TOOGLE_ISFETCHING', false);
    const dataFilmsMult = yield call(fetchQueryFromApi, query);
    yield takeEvery('TOOGLE_ISFETCHING', true);

    // yield put({ type: 'SET_MULT_FILMS', payload: dataFilmsMult.items });
    yield put({ type: 'SET_FILMS', payload: dataFilmsMult.items });
    yield put({ type: 'SET_PAGES_COUNT', payload: dataFilmsMult.totalPages });
}


export function* watchFilmsMult() {
    yield takeEvery('FILMS_MULT', workerMult);
}