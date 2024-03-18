import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  //   selectCount
} from './counterSlice.js'
// import styles from './Counter.module.css'
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <div>
        <button
          className='btn btn-primary'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>
        &nbsp;  {count}
        &nbsp;
        </span>
        <button
          className='btn btn-primary'

          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter