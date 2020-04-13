import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from '../../containers/header/header'
import {
  getTransactions,
  getAppHasStarted,
  getSelectedAddress,
} from '../../redux/selectors'
import { mergeSelectors, dateToString } from '../../helpers'
import Button from '../../components/button/button'
import style from './transaction.module.css'

const Transaction = ({
  history,
  transactions,
  appHasStarted,
  selectedAddress,
}) => {
  const { transaction: transactionHash } = useParams()

  useEffect(() => {
    if (!appHasStarted) {
      history.push('/')
    }
  }, [appHasStarted, history])

  const transaction = transactions.find(
    (transaction) => transaction.hash === transactionHash
  )

  const clickHandler = () => history.push(`/address/${selectedAddress}`)

  return (
    <React.Fragment>
      <Header history={history} />
      {transaction && (
        <article className={style.container}>
          <h2>{transaction.hash}</h2>
          <h3>Adresses</h3>
          <ul>
            {transaction.addresses.map((address) => (
              <li key={address}>{address}</li>
            ))}
          </ul>
          <h3>Confirmed</h3>
          <time>{dateToString(new Date(transaction.confirmed))}</time>
          <h3>Preference</h3>
          <span>{transaction.preference}</span>
        </article>
      )}
      <Button className={style.button} text='Back' onClick={clickHandler} />
    </React.Fragment>
  )
}

export default connect(
  mergeSelectors([getTransactions, getAppHasStarted, getSelectedAddress]),
  null
)(Transaction)
