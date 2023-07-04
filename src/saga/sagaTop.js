import { put, call, takeEvery, select } from 'redux-saga/effects';

import { fetchQueryFromApi } from '../components/Api';


const url_api = 'https://kinopoiskapiunofficial.tech/api/';
const version_api = 'v2.1/films/';
const dataset = 'top?';

function* workerTop({ payload }) {
    const { page } = payload;

    // Формирование поискового запроса
    const paramsQ = new URLSearchParams({        
        page: '',
    });

    // Сформированный запрос
    const query = `${url_api}${version_api}${dataset}${paramsQ}${page}`;

    // const path = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/top?page=';
    // // const page = yield select(state => state.pagination.page);
    // const fetchTopFromApi = async () => {
    //     const request = await fetch(`${path}${page}`, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
    //         },
    //     });
      
    //     return await request.json();
    // };
   
    yield takeEvery('TOOGLE_ISFETCHING', false);   
    const dataFilmsTop = yield call(fetchQueryFromApi , query);
    yield takeEvery('TOOGLE_ISFETCHING', true);
       
   // const dataFilmsTop = yield call(fetchTopFromApi);

    yield put({ type: 'SET_FILMS_TOP', payload: dataFilmsTop.films });
    yield put({ type: 'SET_PAGES_COUNT', payload: dataFilmsTop.pagesCount });
}


export function* watchFilmsTop() {
    yield takeEvery('FILMS_TOP', workerTop);
}