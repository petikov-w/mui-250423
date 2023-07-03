import { put, call, takeEvery, select } from 'redux-saga/effects';


const url_api = 'https://kinopoiskapiunofficial.tech/api/';
const version_api = 'v2.2/';
const dataset = 'films?';
//const query = '/films?countries=34&genres=2&order=RATING&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=2000&yearTo=2023&page=';
  


function* workerSerial({ payload }) {
    const { page, country } = payload;
    
    const scountry = JSON.stringify(country) === '{}' ? '34' : `${country.id}`;
    const paramsQ = new URLSearchParams({ countries: scountry, 
                                         genres: '2',
                                         order: 'RATING',
                                         type: 'TV_SERIES',                                        
                                         ratingFrom: '0',   
                                         ratingTo: '10',
                                         yearFrom: '2000',
                                         yearTo: '2023',
                                         page: '',
                                        });
    const path = `${url_api}${version_api}${dataset}${paramsQ}`;

       
    console.log('scountry +++ :>> ', scountry);
    console.log('country.id +++ :>> ', country.id);
    console.log('country +++ :>> ', country);

    // console.log('path+++ :>> ', path);
    console.log('path :>> ', `${path}${page}`);

    const fetchSerialFromApi = async () => {
        const request = await fetch(`${path}${page}`, {                       
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
            },
        });
        return await request.json();
    };

    const dataFilmsSerial = yield call(fetchSerialFromApi);
   
    yield put({ type: 'SET_FILMS_SERIAL', payload: dataFilmsSerial.items });
    yield put({ type: 'SET_PAGES_COUNT', payload: dataFilmsSerial.totalPages });
}


export function* watchFilmsSerial() {
    yield takeEvery('FILMS_SERIAL', workerSerial);
}