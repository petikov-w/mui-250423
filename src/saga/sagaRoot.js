import { call, all, spawn } from 'redux-saga/effects';

import { watchBasicData } from './sagaBasicData';
import { watchFilmsPremieres } from './sagaPremier';
import { watchFilmsTop } from './sagaTop';
import { watchFilmsSerial } from './sagaSerial';
import { watchFilmsMult } from './sagaMult';
import { watchFilmSingle } from './sagaSingle';

export default function* rootSaga() {
    // В этот массив добавляем все импортированные вотчеры
    const sagas = [
        watchBasicData,
        watchFilmsTop,
        watchFilmsPremieres,
        watchFilmsSerial,
        watchFilmsMult,
        watchFilmSingle,
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