import { takeLatest, call, put, all, delay } from 'redux-saga/effects'
import actions, { saveAddressData, appHasStarted } from './actions'
import { fetchAddress as fetchAddressFromBE } from '../api'
import { reduceBETransactionsData } from '../helpers'

function* fetchAddress({ addressHash, forceRefresh }) {
  try {
    const savedTransactions = localStorage.getItem(addressHash)
    if (forceRefresh || savedTransactions === null) {
      const [{ address, txs: transactions }] = yield all([
        call(fetchAddressFromBE, addressHash),
        delay(2000), // 2 sec delay for showing the fancy animation
      ])
      const reducedTransactionData = reduceBETransactionsData(transactions)
      localStorage.setItem(
        address,
        JSON.stringify({
          transactions: reducedTransactionData,
        })
      )
      yield put(saveAddressData(reducedTransactionData))
    } else {
      yield put(saveAddressData(JSON.parse(savedTransactions).transactions))
    }
    yield put(appHasStarted(true))
  } catch (error) {
    console.error(error)
  }
}

function* rootSaga() {
  yield takeLatest(actions.FETCH_ADDRESS, fetchAddress)
}

export default rootSaga
