import React from 'react'
import Contact from '../Contact/Contact'
import data from '../../mock/FirstData'

const FirstPage = () => {
  return (
    <div className="">
      {
        data.map(date => {
          return (
            <Contact
              key={date.index}
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
  )
}

export default FirstPage