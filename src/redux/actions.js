const actions = {
  FETCH_ADDRESS: 'fetch-address',
  SAVE_ADDRESS_DATA: 'save-address-data',
  APP_HAS_STARTED: 'app-has-started',
}

const fetchAddress = (address) => ({
  type: actions.FETCH_ADDRESS,
  address,
})

const saveAddressData = (data) => ({
  type: actions.SAVE_ADDRESS_DATA,
  data,
})

const appHasStarted = (value) => ({
  type: actions.APP_HAS_STARTED,
  value,
})

export default actions
export { fetchAddress, saveAddressData, appHasStarted }
