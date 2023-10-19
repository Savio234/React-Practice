import React from 'react'
import TravelVlogCard from '../Cards/TravelVlogCard'
import TravelData from '../../mock/travelVlogData'
import './Third.css'

const Third = () => {
  return (
    <div className='projectBody'>
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