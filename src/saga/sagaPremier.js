import { put, call, takeEvery } from 'redux-saga/effects';

import { fetchQueryFromApi } from '../components/Api';

const url_api = 'https://kinopoiskapiunofficial.tech/api/';
const version_api = 'v2.2/films/';
const dataset = 'premieres?';

export function* workerPremieres() {

    // Формирование поискового запроса
    const paramsQ = new URLSearchParams({
        year: '2023',
        month: 'JULY',
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
