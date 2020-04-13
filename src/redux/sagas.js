import { takeLatest, call, put, all, delay } from 'redux-saga/effects'
import actions, { saveAddressData, appHasStarted } from './actions'
import { fetchAddress as fetchAddressFromBE } from '../api'
import { reduceBETransactionsData } from '../helpers'

function* fetchAddress({ address }) {
  const [{ txs: transactions }] = yield all([
    call(fetchAddressFromBE, address),
    delay(2000), // 3sec delay for showing the fancy animation
  ])
  const reducedTransactionData = reduceBETransactionsData(transactions)
  try {
    localStorage.setItem(
      'transactions',
      JSON.stringify({
        transactions: reducedTransactionData,
      })
    )
  } catch (error) {
    console.log(error)
  }
  yield put(saveAddressData(reducedTransactionData))
  yield put(appHasStarted(true))
}

function* rootSaga() {
  yield takeLatest(actions.FETCH_ADDRESS, fetchAddress)
}

export default rootSaga
