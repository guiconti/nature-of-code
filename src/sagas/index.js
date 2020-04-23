import { all } from 'redux-saga/effects';
import barSaga from './barSaga';
import fooSaga from './fooSaga';

export default function* rootSaga() {
  yield all([
    barSaga(),
    fooSaga()
  ]);
}
