import { put, call, takeEvery } from 'redux-saga/effects';

export function* workerPremier() {
    const fetchPremierFromApi = async () => {
        const request = await fetch(`${process.env.REACT_APP_API_PREMIERS}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
            },
        });
        return await request.json();
    };
    const dataPremier = yield call(fetchPremierFromApi);

    yield put({ type: 'SET_FILMS_PREMIER', payload: dataPremier.items });
}

export function* watchFilmsPremier() {
    yield takeEvery('FILMS_PREMIER', workerPremier);
}
