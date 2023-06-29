import { put, call, all, spawn, take, takeEvery, select, fork, takeLeading } from 'redux-saga/effects';
import { useSelector } from 'react-redux';

function* workerTop() {

    const currentPage = yield select(state => state.pagination.page);

    const fetchTopFromApi = async () => {
        const request = await fetch(`${process.env.REACT_APP_API_TOP_PAGE}` + currentPage, {
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



function* workerTop_2({ payload }) {

    const { page } = payload;
    //const currentPage = yield select(state => state.pagination.page);

    const fetchTopFromApi = async () => {
        const request = await fetch(`${process.env.REACT_APP_API_TOP_PAGE}` + page, {
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
    yield takeEvery('FILMS_TOP', workerTop_2);
}