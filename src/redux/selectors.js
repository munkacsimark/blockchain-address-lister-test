const getCounter = (state) => ({ counter: state.counter })
const getSelectedAddress = (state) => ({
  selectedAddress: state.selectedAddress,
})
const getAddresses = (state) => ({ addresses: state.addresses })
const getAppHasStarted = (state) => ({ appHasStarted: state.appHasStarted })

export { getCounter, getSelectedAddress, getAddresses, getAppHasStarted }
