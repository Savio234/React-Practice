import React from 'react'
import Contact from '../Contact/Contact'
import data from '../../mock/HomePageData'

const FirstPage = () => {
  return (
    <>
      <div style={{margin: '4rem 0 3rem'}} className="flex flex-around flex-wrap">
        {
          data.map(date => {
            return (
              <Contact
                key={date.id}
                bg={date.bg}
                img={date.img}
                name={date.name}
                phone={date.phone}
                email={date.email}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default FirstPage