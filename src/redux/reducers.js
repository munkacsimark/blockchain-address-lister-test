import actions from './actions'

const addresses = [
  'mgR4uAAekM6ZSecEV8YA9ZYHQvMdqRWdnP',
  'mmyd1CeSxxPuQB8JXbrgXucG5pP3M5JHGn',
  'msNRW6K5g5VagPFCyihmX47zE4fh9NoVn3',
  'mi4BnbVd1TFVrbpaGbimduQirwWBNwKSny',
  'mgALHtP9CNDbtbYXRdzjj7Lu5D8xBnZxr8',
]

const initialState = {
  backgroundFetching: false,
  appHasStarted: false,
  selectedAddress: addresses[0],
  addresses,
  transactions: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_ADDRESS_DATA:
      return {
        ...state,
        transactions: action.data,
      }
    case actions.APP_HAS_STARTED:
      return {
        ...state,
        appHasStarted: action.value,
      }
    case actions.SET_SELECTED_ADDRESS:
      return {
        ...state,
        selectedAddress: action.address,
      }
    default:
      return state
  }
}

export default reducer
