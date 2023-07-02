import { put, call, takeEvery, select } from 'redux-saga/effects';

function* workerSerial({ payload }) {
    const { page } = payload;
    // const page = yield select(state => state.pagination.page);
    const fetchSerialFromApi = async () => {
        const request = await fetch(`${process.env.REACT_APP_API_SERIALS}${page}`, {
                       
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
            },
        });
        return await request.json();
    };

    const dataFilmsSerial = yield call(fetchSerialFromApi);
    yield (console.log('query :>> ', `${process.env.REACT_APP_API_SERIALS}${page}`));
    yield (console.log('dataFilmsSerial :>> ', dataFilmsSerial));

    yield put({ type: 'SET_FILMS_SERIAL', payload: dataFilmsSerial.items });
    yield put({ type: 'SET_PAGES_COUNT', payload: dataFilmsSerial.totalPages });
}


export function* watchFilmsSerial() {
    yield takeEvery('FILMS_SERIAL', workerSerial);
}