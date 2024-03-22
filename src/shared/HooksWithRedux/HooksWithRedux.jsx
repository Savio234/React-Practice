import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './HooksWithRedux.css'
import { BUYCAKE, RETURNCAKE } from '../../redux'

const HooksWithRedux = () => {
    const numberOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div className='flex flex-column align-center container'>
        <h1>Number of Cakes - {numberOfCakes}</h1>
        <div className='flex flex-center btns'>
            <button style={{cursor: 'pointer'}} onClick={() => dispatch(RETURNCAKE())}>
                Return cakes
            </button>
            <button style={{cursor: 'pointer'}} onClick={() => dispatch(BUYCAKE())}>
                Buy cakes
            </button>
        </div>
    </div>
  )
}

export default HooksWithRedux