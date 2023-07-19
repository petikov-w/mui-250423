import { put, call, takeEvery, select } from 'redux-saga/effects';

import { fetchQueryFromApi } from '../components/Api';


const url_api = 'https://kinopoiskapiunofficial.tech/api/';
const version_api = 'v2.2/films/';
const dataset = 'top?';

// https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1' \

function* workerTop({ payload }) {
    const { page, collection } = payload;

    const page22 = yield select((state)=> state.pagination.page);
    const scollection = JSON.stringify(collection) === '{}' ? 'TOP_250_BEST_FILMS' : `${collection.id}`;
    // Формирование поискового запроса
    const paramsQ = new URLSearchParams({
        type: scollection,
        page: '',
    });

    // Сформированный запрос
    const query = `${url_api}${version_api}${dataset}${paramsQ}${page22}`;

    // console.log('query-top :>> ', query);

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