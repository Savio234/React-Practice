import React, { useState } from 'react'
import './States.css'

const States = () => {
  const [counter, setCounter ] = useState(0)
  const [inputValue, setInputValue] = useState('Initial text')
  const countDecrement = () => {
    setCounter(counter - 1)
  }
  const countIncrement = () => {
    setCounter(counter + 1)
  }
  const handleOnchange = (event) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }

  return (
    <section>
      <h1>UseState</h1>
      <div className="useState flex align-center">
        <div className="counter_container flex flex-center">
          <h1 onClick={countDecrement}>-</h1>
          <div className='counter flex align-center'>
            <h3>{counter}</h3>
          </div>
          <h1 onClick={countIncrement}>+</h1>
        </div>
        <div className="input_container flex flex-center">
          <input type="text" name="text" placeholder='Enter a text...' 
            onChange={handleOnchange} 
          />
          <p>{inputValue}</p>
        </div>
      </div>

    </section>
  )
}

export default States