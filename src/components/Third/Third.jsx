import React from 'react'
import TravelVlogCard from '../Cards/TravelVlogCard'
import TravelData from '../../mock/travelVlogData'
import { useLocation } from 'react-router-dom'
import './Third.css'

const Third = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  return (
    <div className='projectBody'>
      <p>{currentUrl !== '/checkout' ? 'Shop' : 'Checkout'}</p>
      {
        TravelData.map(data => {
          return (
            <TravelVlogCard
              key={data.title}
              {...data}
            />
          )
        })
      }
    </div>
  )
}

export default Third