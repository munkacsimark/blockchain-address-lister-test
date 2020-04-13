import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAppHasStarted, getTransactions } from '../../redux/selectors'
import { setSelectedAddress } from '../../redux/actions'
import Header from '../../containers/header/header'
import Transaction from '../../components/transaction/transaction'
import { mergeSelectors, sortTransactionsByDate } from '../../helpers'
import style from './address.module.css'

const Address = ({ appHasStarted, transactions, history }) => {
  const { address } = useParams()

  useEffect(() => {
    setSelectedAddress(address)
    if (!appHasStarted) {
      history.push('/')
    }
  }, [appHasStarted])

  const clickHandler = (hash) => history.push(`/transaction/${hash}`)

  return (
    <React.Fragment>
      <Header title={`Address: ${address}`} />
      <div className={style.container}>
        {transactions.sort(sortTransactionsByDate).map((transaction) => (
          <Transaction
            key={transaction.hash}
            transaction={transaction}
            onClick={() => clickHandler(transaction.hash)}
          />
        ))}
      </div>
    </React.Fragment>
  )
}

export default connect(mergeSelectors([getAppHasStarted, getTransactions]), {
  setSelectedAddress,
})(Address)
