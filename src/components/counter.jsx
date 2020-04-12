import React from 'react'
import { connect } from 'react-redux'
import { getCounter } from '../redux/selectors'
import { incrementCounter, asyncDecrementCounter } from '../redux/actions'

const Counter = ({ counter, incrementCounter, asyncDecrementCounter }) => {
  return (
    <div>
      <span>{counter}</span>
      <button onClick={incrementCounter}>PLUS</button>
      <button onClick={asyncDecrementCounter}>MINUS</button>
    </div>
  )
}

export default connect(getCounter, { incrementCounter, asyncDecrementCounter })(
  Counter
)
