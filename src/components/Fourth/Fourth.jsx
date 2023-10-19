import React from 'react'
import CardData from '../../mock/CardData'
import SecondContactCard from '../Cards/SecondContactCard'

const FourthPage = () => {
  return (
    <div style={{justifyContent: 'space-around'}} className='flex flex-wrap align-center relative'>
        {
            CardData.map(item => {
                return (
                    <SecondContactCard
                        key={item.id}
                        item={item}
                        // {...item} // spreading the props with the spread object literal '...' ensures 
                        // the props are passed into this component without having to do the 'props.item'
                    />
                )
            })
        }
    </div>
  )
}

export default FourthPage