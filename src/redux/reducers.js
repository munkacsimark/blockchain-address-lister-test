import actions from './actions'

const initialState = {
  counter: 0,
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
