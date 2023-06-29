import { put, call, all, spawn } from 'redux-saga/effects';

export function* workerPremiers() {

    const fetchPremiersFromApi = async () => fetch(`${process.env.REACT_APP_API_PREMIERS}`, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
        },
    }).then((responce) => responce.json()).then(data => data.items);

    const dataPremiers = yield call(fetchPremiersFromApi);
    yield put({ type: 'SET_FILMS_PREMIER', payload: dataPremiers });
}




// export function* watchBasicData() {
//     yield all([
//         spawn(workerPremiersFromApi),
//     ]);

// }