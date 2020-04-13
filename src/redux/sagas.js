import { takeEvery, call, put, all, delay } from 'redux-saga/effects'
import actions, { saveAddressData, appHasStarted } from './actions'
import { fetchAddress as fetchAddressFromBE } from '../api'
import { reduceBETransactionsData } from '../helpers'

function* fetchAddress({ addressHash }) {
  try {
    const savedTransactions = localStorage.getItem(addressHash)
    console.log('START: ', 'SAVED: ', !!savedTransactions)
    if (savedTransactions === null) {
      yield put(appHasStarted(false))
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

function* clearStorage({ address }) {
  try {
    const savedTransactions = localStorage.getItem(address)
    if (savedTransactions !== null) {
      localStorage.removeItem(address)
    }
  } catch (error) {
    console.error(error)
  }
}

function* rootSaga() {
  yield takeEvery(actions.FETCH_ADDRESS, fetchAddress)
  yield takeEvery(actions.CLEAR_STORAGE, clearStorage)
}

export default rootSaga
