import actions from './actions'
import { all, put, takeEvery, delay } from 'redux-saga/effects'

function* decWatcher() {
  yield delay(2000)
  yield put({ type: actions.DEC })
}

function* rootSaga() {
  // yield all([...])
  console.log('saga started')
  yield takeEvery(actions.ASYNC_DEC, decWatcher)
}

export default rootSaga
