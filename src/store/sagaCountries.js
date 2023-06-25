import { take, put, takeEvery, call, takeLeading } from 'redux-saga/effects';

// import { SET_LIST_COUNTRYS } from './reducerListCountries';

const requiredGenres = ['драма', 'боевик', 'мультфильм', 'военный', 'документальный'];
const requiredCountries = ['СССР', 'Россия', 'США', 'Франция', 'Великобритания', 'Польша',
    'Испания', 'Италия', 'Германия', 'Индия', 'Япония', 'Китай', 'Корея Южная', 'Бразилия'];

const fetchCountryFromApi = () => fetch(`${process.env.REACT_APP_API_FILTERS}`, {
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
    },
}).then((responce) => responce.json()).then(data => data.countries);




// export function* workerfetchCountries() {

//     console.log('**** CLICK *****');
// }
// export function* watchfetchCountries() {
//     yield take('CLICK');
//     yield (workerS1());
//     yield (console.log('**** CLICK *****'));
//     const data = yield call(fetchCountryFromApi);
//     yield( console.log('json**** :>> ', data));
//     const json = yield call(() => new Promise(res => res(data.json())));   
//     yield put(SET_LIST_COUNTRYS(json));
//}



// eslint-disable-next-line require-yield
export function* workerS1() {
    const data = yield (fetchCountryFromApi());
    const filteredCountries = data.filter((item) => requiredCountries.includes(item.country));
    console.log('**** CLICK *****', filteredCountries);
    yield put({ type: 'SET_LIST_COUNTRYS', payload: data });
}


export function* watchS1() {
    // yield takeLeading('CLICK', workerS1)
    yield take('CLICK');
    yield (workerS1());
}

export default function* rootSaga() {
    yield watchS1();

}               