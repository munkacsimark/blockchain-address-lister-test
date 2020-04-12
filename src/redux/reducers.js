import actions from './actions'

const initialState = {
  backgroundFetching: false,
  addresses: [
    'mgR4uAAekM6ZSecEV8YA9ZYHQvMdqRWdnP',
    'mmyd1CeSxxPuQB8JXbrgXucG5pP3M5JHGn',
    'msNRW6K5g5VagPFCyihmX47zE4fh9NoVn3',
    'mi4BnbVd1TFVrbpaGbimduQirwWBNwKSny',
    'mgALHtP9CNDbtbYXRdzjj7Lu5D8xBnZxr8',
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.DEC:
      return {
        ...state,
        counter: state.counter - 1,
      }
    case actions.INC:
      return {
        ...state,
        counter: state.counter + 1,
      }
    default:
      return state
  }
}

export default reducer
