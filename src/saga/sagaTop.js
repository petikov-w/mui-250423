import { put, call, all, spawn, take, takeEvery, select, fork, takeLeading } from 'redux-saga/effects';
import { useSelector } from 'react-redux';

function* workerTop() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const currentPage = yield select(state => state.pagination.page);
     yield console.log('currentPage :>> ', currentPage);

    // const  fetchTopFromApi = () => fetch(`${process.env.REACT_APP_API_TOP_PAGE}` + currentPage, {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
    //     },
    // }).then((responce) => responce.json());

    // const dataFilmsTop = yield call(fetchTopFromApi);

    // yield put({ type: 'SET_FILMS_TOP', payload: dataFilmsTop.films });
    // yield put({ type: 'SET_PAGES_COUNT', payload: dataFilmsTop.pagesCount });


}

export function* watchFilmsTop() {
    // yield takeLeading('FILMS_TOP', workerTop);
}