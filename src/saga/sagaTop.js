import { put, call, takeEvery, select } from 'redux-saga/effects';

function* workerTop({ payload }) {
    const { page } = payload;
    const path = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/top?page=';
    // const page = yield select(state => state.pagination.page);
    const fetchTopFromApi = async () => {
        const request = await fetch(`${path}${page}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
            },
        });
      
        return await request.json();
    };
    const dataFilmsTop = yield call(fetchTopFromApi);

    yield put({ type: 'SET_FILMS_TOP', payload: dataFilmsTop.films });
    yield put({ type: 'SET_PAGES_COUNT', payload: dataFilmsTop.pagesCount });
}


export function* watchFilmsTop() {
    yield takeEvery('FILMS_TOP', workerTop);
}