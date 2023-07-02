import { call, all, spawn } from 'redux-saga/effects';

import { watchBasicData } from './sagaBasicData';
import { watchFilmsPremier } from './sagaPremier';
import { watchFilmsTop } from './sagaTop';
import { watchFilmsSerial } from './sagaSerial';

export default function* rootSaga() {
    // В этот массив добавляем все импортированные вотчеры
    const sagas = [
        watchBasicData,
        watchFilmsTop,
        watchFilmsPremier,
        watchFilmsSerial,       
    ];

    const retrySagas = yield sagas.map(saga => {
        return spawn(function* () {
            while (true) {
                try {
                    yield call(saga);
                    break;
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.log('Ошибка ->>> : ', e);
                }
            }
        });
    });

    yield all(retrySagas);

}         