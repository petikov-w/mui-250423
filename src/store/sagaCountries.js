import {put, takeEvery, call} from 'redux-saga/effects';

import { SET_LIST_COUNTRYS} from './reducerListCountries';

const fetchCountryFromApi = () => fetch(`${process.env.REACT_APP_API_FILTERS}`, {
                                         headers: { 'Content-Type': 'application/json', 
                                         'X-API-KEY': `${process.env.REACT_APP_API_KEY}`}});

export function* workerfetchCountries() {
  
}                                         

export function* watchfetchCountries() {
    yield( console.log('**********'));
    const data = yield call(fetchCountryFromApi);
    yield( console.log('json**** :>> ', data));
    // const json = yield call(() => new Promise(res => res(data.json())));
   
    // yield put(SET_LIST_COUNTRYS(json));
}                   

export default function* rootSaga() {
    yield watchfetchCountries();
   
}               