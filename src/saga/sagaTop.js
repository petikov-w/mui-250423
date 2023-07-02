import { put, call, takeEvery, select } from 'redux-saga/effects';

function* workerTop({ payload }) {
    // const { page } = payload;
    const page = yield select(state => state.pagination.page);
    const fetchTopFromApi = async () => {
        const request = await fetch(`${process.env.REACT_APP_API_TOP_PAGE}${page}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
            },
        });
        // console.log('query-0 :>> ', request.json());
        return await request.json();
    };
    const dataFilmsTop = yield call(fetchTopFromApi);
    // yield (console.log('query :>> ', `${process.env.REACT_APP_API_TOP_PAGE}${page}`));
    // yield (console.log('dataFilmsTop :>> ', dataFilmsTop));

    yield put({ type: 'SET_FILMS_TOP', payload: dataFilmsTop.films });
    yield put({ type: 'SET_PAGES_COUNT', payload: dataFilmsTop.pagesCount });
}


export function* watchFilmsTop() {
    yield takeEvery('FILMS_TOP', workerTop);
}