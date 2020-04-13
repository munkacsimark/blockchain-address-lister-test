import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAppHasStarted, getTransactions } from '../../redux/selectors'
import { setSelectedAddress } from '../../redux/actions'
import Header from '../../containers/header/header'
import Transaction from '../../components/transaction/transaction'
import {
  mergeSelectors,
  sortTransactionsByDate,
  todayFilter,
  lastWeekFilter,
  lastMonthFilter,
  lastYearFilter,
  otherFilter,
} from '../../helpers'
import style from './address.module.css'

const Address = ({ appHasStarted, transactions, history }) => {
  const { address } = useParams()

  useEffect(() => {
    setSelectedAddress(address)
    if (!appHasStarted) {
      history.push('/')
    }
  }, [appHasStarted, history, address])

  const clickHandler = (hash) => history.push(`/transaction/${hash}`)
  const sortedTransactions = transactions.sort(sortTransactionsByDate)
  const todayTransactions = sortedTransactions.filter(todayFilter)
  const lastWeekTransactions = sortedTransactions.filter(lastWeekFilter)
  const lastMonthTransactions = sortedTransactions.filter(lastMonthFilter)
  const lastYearTransactions = sortedTransactions.filter(lastYearFilter)
  const olderTransactions = sortedTransactions.filter(otherFilter)

  const FilteredList = ({ filteredTransactions, label }) =>
    filteredTransactions.length ? (
      <React.Fragment>
        <span className={style.label}>{label}</span>
        {filteredTransactions.map((transaction) => (
          <Transaction
            key={transaction.hash}
            transaction={transaction}
            onClick={() => clickHandler(transaction.hash)}
          />
        ))}
      </React.Fragment>
    ) : null

  return (
    <React.Fragment>
      <Header history={history} />
      <div className={style.container}>
        <FilteredList filteredTransactions={todayTransactions} label='Today' />
        <FilteredList
          filteredTransactions={lastWeekTransactions}
          label='Last Week'
        />
        <FilteredList
          filteredTransactions={lastMonthTransactions}
          label='Last Month'
        />
        <FilteredList
          filteredTransactions={lastYearTransactions}
          label='Last Year'
        />
        <FilteredList filteredTransactions={olderTransactions} label='Older' />
      </div>
    </React.Fragment>
  )
}

export default connect(mergeSelectors([getAppHasStarted, getTransactions]), {
  setSelectedAddress,
})(Address)
