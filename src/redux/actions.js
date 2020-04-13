const actions = {
  FETCH_ADDRESS: 'fetch-address',
  SAVE_ADDRESS_DATA: 'save-address-data',
  APP_HAS_STARTED: 'app-has-started',
  SET_SELECTED_ADDRESS: 'set-selected-address',
}

const fetchAddress = (addressHash, forceRefresh = false) => ({
  type: actions.FETCH_ADDRESS,
  addressHash,
  forceRefresh,
})

const saveAddressData = (data) => ({
  type: actions.SAVE_ADDRESS_DATA,
  data,
})

const appHasStarted = (value) => ({
  type: actions.APP_HAS_STARTED,
  value,
})

const setSelectedAddress = (address) => ({
  type: actions.SET_SELECTED_ADDRESS,
  address,
})

export default actions
export { fetchAddress, saveAddressData, appHasStarted, setSelectedAddress }
