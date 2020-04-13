const reduceBETransactionsData = (transactions) =>
  transactions.map((transaction) => ({
    addresses: transaction.addresses,
    hash: transaction.hash,
    confirmed: transaction.confirmed,
    preference: transaction.preference,
    size: transactions.size,
    total: transactions.total,
    fees: transactions.fees,
  }))

const mergeSelectors = (selectors) => (state) =>
  selectors.reduce((sum, item) => ({ ...sum, ...item(state) }), {})

const dateToString = (date) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const setZeros = (number) => (number < 10 ? `0${number}` : number)
  return `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()} at ${setZeros(
    date.getHours()
  )}:${setZeros(date.getMinutes())}`
}

const sortTransactionsByDate = (a, b) =>
  new Date(b.confirmed) - new Date(a.confirmed)

export {
  reduceBETransactionsData,
  mergeSelectors,
  dateToString,
  sortTransactionsByDate,
}
