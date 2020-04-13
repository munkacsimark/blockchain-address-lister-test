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

const todayFilter = (transaction) => {
  const currentTime = Date.now()
  const confirmedTime = new Date(transaction.confirmed).getTime()
  return currentTime - confirmedTime <= 86400000
}

const lastWeekFilter = (transaction) => {
  const currentTime = Date.now()
  const confirmedTime = new Date(transaction.confirmed).getTime()
  return currentTime - confirmedTime <= 604800000
}

const lastMonthFilter = (transaction) => {
  const currentTime = Date.now()
  const confirmedTime = new Date(transaction.confirmed).getTime()
  return currentTime - confirmedTime <= 2629743000
}

const lastYearFilter = (transaction) => {
  const currentTime = Date.now()
  const confirmedTime = new Date(transaction.confirmed).getTime()
  return currentTime - confirmedTime <= 31556926000
}

const otherFilter = (transaction) => {
  const currentTime = Date.now()
  const confirmedTime = new Date(transaction.confirmed).getTime()
  return currentTime - confirmedTime > 31556926000
}

export {
  reduceBETransactionsData,
  mergeSelectors,
  dateToString,
  sortTransactionsByDate,
  todayFilter,
  lastWeekFilter,
  lastMonthFilter,
  lastYearFilter,
  otherFilter,
}
