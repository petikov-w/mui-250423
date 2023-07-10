import { put, call, all, spawn } from 'redux-saga/effects';

const listTop = [
    { id: 'TOP_250_BEST_FILMS', top: 'Топ лучших фильмов' },
    { id: 'TOP_100_POPULAR_FILMS', top: 'Топ популярных фильмов' },
    { id: 'TOP_AWAIT_FILMS', top: 'Топ ожидаемых фильмов' }];

const listYears = [
    { from: '1900', to: '1930', range: '1900 - 1930' },
    { from: '1930', to: '1950', range: '1930 - 1950' },
    { from: '1950', to: '1970', range: '1950 - 1970' },
    { from: '1970', to: '1980', range: '1970 - 1980' },
    { from: '1980', to: '1990', range: '1980 - 1990' },
    { from: '1990', to: '2000', range: '1990 - 2000' },
    { from: '2000', to: '2010', range: '2000 - 2010' },
    { from: '2010', to: '2020', range: '2010 - 2020' },
    { from: '2020', to: '2023', range: '2020 - 2023' },
];

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
    yield put({ type: 'SET_LIST_TOP_COLLECTION', payload: listTop });
    yield put({ type: 'SET_LIST_YEARS_COLLECTION', payload: listYears });
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
    // console.log('filteredCountries :>> ', filteredCountries);
    yield put({ type: 'SET_LIST_COUNTRYS', payload: filteredCountries });
}

export function* watchBasicData() {
    yield all([
        spawn(workerGenres),
        spawn(workerCountries),
    ]);

}