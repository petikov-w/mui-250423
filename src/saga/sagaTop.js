import { put, call, all, spawn, take, takeEvery, select, fork, takeLeading, apply } from 'redux-saga/effects';
import { useSelector } from 'react-redux';



function* workerTop(payload) {
    const { page } = payload;
   // const currentPage = yield select(state => state.pagination.page);

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

function* workerTop_2({ payload }) {

    const { page } = payload;
    //const currentPage = yield select(state => state.pagination.page);

    // const fetchTopFromApi = async () => {
    //     const request = await fetch(`${process.env.REACT_APP_API_TOP_PAGE}` + page, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
    //         },
    //     });
    //     return await request.json();
    // };

    const request = yield call( fetch, 
                                `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?&page=${page}`,
                                {
                                    'Content-Type': 'application/json',
                                    'X-API-KEY': 'cd73c1bd-276a-4e67-9aab-fe1f28627864',
                                    // 'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
                                });

    const data = yield apply(request, request.json);
    yield(console.log('data :>> ', data));                            

    //const dataFilmsTop = yield call(fetchTopFromApi);

    yield put({ type: 'SET_FILMS_TOP', payload: data.films });
    yield put({ type: 'SET_PAGES_COUNT', payload: data.pagesCount });
}

export function* watchFilmsTop() {
    // const currentPage = yield select(state => state.pagination.page);
    yield takeEvery('FILMS_TOP', workerTop());
}