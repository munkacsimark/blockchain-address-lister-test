const reduceBETransactionsData = (transactions) =>
  transactions.map((transaction) => ({
    addresses: transaction.addresses,
    hash: transaction.hash,
    confirmed: transaction.confirmed,
  }))

const mergeSelectors = (selectors) => (state) =>
  selectors.reduce((sum, item) => ({ ...sum, ...item(state) }), {})

export { reduceBETransactionsData, mergeSelectors }
