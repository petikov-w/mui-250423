import { put, call, all, spawn } from 'redux-saga/effects';


function* workerGenres() {
    //const requiredGenres = ['драма', 'боевик', 'мультфильм', 'военный', 'документальный'];

    const fetchGenresFromApi = async () => fetch(`${process.env.REACT_APP_API_FILTERS}`, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
        },
    }).then((responce) => responce.json()).then(data => data.genres);

    const dataGenres = yield call(fetchGenresFromApi);
    yield put({ type: 'SET_LIST_GENRES', payload: dataGenres });
}

function* workerCountries() {
    const requiredCountries = ['СССР', 'Россия', 'США', 'Франция', 'Великобритания', 'Польша',
        'Испания', 'Италия', 'Германия', 'Индия', 'Япония', 'Китай', 'Корея Южная', 'Бразилия'];

    const fetchCountriesFromApi = async () => fetch(`${process.env.REACT_APP_API_FILTERS}`, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
        },
    }).then((responce) => responce.json()).then(data => data.countries);

    const dataCountries = yield call(fetchCountriesFromApi);
    const filteredCountries = dataCountries.filter((item) => requiredCountries.includes(item.country));

    yield put({ type: 'SET_LIST_COUNTRYS', payload: filteredCountries });
}

export function* watchBasicData() {
    yield all([
        spawn(workerGenres),
        spawn(workerCountries),
    ]);

}