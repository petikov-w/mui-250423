import { call, all, spawn } from 'redux-saga/effects';

import { watchBasicData } from './sagaBasicData';
import { watchFilmsTop } from './sagaTop';

export default function* rootSaga() {
    // В этот массив добавляем все импортированные вотчеры
    const sagas = [
        watchBasicData,
        watchFilmsTop,
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