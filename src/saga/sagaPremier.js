import { put, call, takeEvery } from 'redux-saga/effects';


"https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=MAY"

export function* workerPremier() {

    const scountry = JSON.stringify(country) === '{}' ? '34' : `${country.id}`;
    // Формирование поискового запроса
    const paramsQ = new URLSearchParams({
        countries: scountry,
        genres: '2',
        order: 'RATING',
        type: 'TV_SERIES',
        ratingFrom: '0',
        ratingTo: '10',
        yearFrom: '2000',
        yearTo: '2023',
        page: '',
    });
    // Сформированный запрос
    const query = `${url_api}${version_api}${dataset}${paramsQ}${page}`;
    
    yield takeEvery('TOOGLE_ISFETCHING', false);   
    const dataFilmsSerial = yield call(fetchQueryFromApi , query);
    yield takeEvery('TOOGLE_ISFETCHING', true);





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
