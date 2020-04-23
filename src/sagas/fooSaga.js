import { put, call, take, fork, all } from 'redux-saga/effects';
import retrieveExample from '../apis/retrieveExample';
import { receiveExample } from '../actions/fooActions';
import { FOO_FETCH_EXAMPLE } from '../types/foo';

export function* fetchExample(payload) {
  const value = yield call(retrieveExample, payload.value);
  yield put(receiveExample(value));
}

function* watchFetchExample() {
  while(true) {
    const { payload } = yield take(FOO_FETCH_EXAMPLE);
    //  If you want a behavior similar to takeLatest change fork to call
    //  So it starts listening to the type again only when fetchExample finishes
    yield fork(fetchExample, payload);
  }
}

export default function* watch() {
  yield all([
    fork(watchFetchExample),
  ]);
}
