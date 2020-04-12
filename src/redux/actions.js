const actions = {
  INC: 'INC',
  DEC: 'DEC',
  ASYNC_DEC: 'ASYNC_DEC',
}

const incrementCounter = () => ({
  type: actions.INC,
})

const decrementCounter = () => ({
  type: actions.DEC,
})

const asyncDecrementCounter = () => ({
  type: actions.ASYNC_DEC,
})

export default actions
export { incrementCounter, decrementCounter, asyncDecrementCounter }
