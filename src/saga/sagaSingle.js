import { put, call, takeEvery } from 'redux-saga/effects';

import { fetchQueryFromApi } from '../components/Api';


const url_api = 'https://kinopoiskapiunofficial.tech/api/';
const version_api = 'v2.2/';
const dataset = 'films/';

function* workerSingle({ payload }) {
    const { id } = payload;

    // Сформированный запрос
    const query = `${url_api}${version_api}${dataset}${id}`;

    yield put({ type: 'TOOGLE_ISFETCHING', payload: true });
    const data = yield call(fetchQueryFromApi, query);
    yield put({ type: 'TOOGLE_ISFETCHING', payload: false });
    yield put({ type: 'TOOGLE_SINGLE_PAGE', payload: true });
    yield put({ type: 'FILM_SINGLE', payload: data });

}


export function* watchFilmSingle() {
    yield takeEvery('SINGLE', workerSingle);
}