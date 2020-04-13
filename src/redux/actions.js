const actions = {
  FETCH_ADDRESS: 'fetch-address',
  SAVE_ADDRESS_DATA: 'save-address-data',
  APP_HAS_STARTED: 'app-has-started',
  SET_SELECTED_ADDRESS: 'set-selected-address',
  CHANGE_ADDRESS: 'change-address',
  CLEAR_STORAGE: 'clear-storage',
}

const fetchAddress = (addressHash) => ({
  type: actions.FETCH_ADDRESS,
  addressHash,
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

const changeAddress = (address) => ({
  type: actions.CHANGE_ADDRESS,
  address,
})

const clearStorage = (address) => ({
  type: actions.CLEAR_STORAGE,
  address,
})

export default actions
export {
  fetchAddress,
  saveAddressData,
  appHasStarted,
  setSelectedAddress,
  changeAddress,
  clearStorage,
}
