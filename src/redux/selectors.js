const getCounter = (state) => ({ counter: state.counter })
const getSelectedAddress = (state) => ({
  selectedAddress: state.selectedAddress,
})
const getAddresses = (state) => ({ addresses: state.addresses })
const getAppHasStarted = (state) => ({ appHasStarted: state.appHasStarted })
const getTransactions = (state) => ({ transactions: state.transactions })

export {
  getCounter,
  getSelectedAddress,
  getAddresses,
  getAppHasStarted,
  getTransactions,
}
