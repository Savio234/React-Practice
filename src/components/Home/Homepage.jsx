import React from 'react'
import ContactCard from '../Cards/Contactcard'
import Memegenerator from '../MemeGenerator/Memegenerator'
import Cardsdata from '../../mock/HomePageData'
import Slider from '../../shared/imageSlider/Slider'

const FirstPage = () => {
  const slides = [1, 2, 3, 4]
  return (
    <>
      <div style={{margin: '4rem 0 8rem'}} className="flex flex-around flex-wrap">
        {
          Cardsdata.map(Carddata => {
            return (
              <ContactCard
                key={Carddata.id}
                bg={Carddata.bg}
                img={Carddata.img}
                name={Carddata.name}
                phone={Carddata.phone}
                email={Carddata.email}
              />
            )
          })
        }
      </div>
      <Memegenerator />
      <Slider slides={slides} />
    </>
  )
}

export default FirstPage