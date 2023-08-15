import React from 'react'
import Contact from '../components/Contact/Contact'

const First = () => {
  const data = [
    {
      bg: "#EA445A",
      img: "",
      name: "Mr. Whiskerson",
      phone: "(234)-555-0982",
      email: "crazyunicore@gmail.com"
    },
    {
      bg: "#111021",
      img: "",
      name: "Joao Felix",
      phone: "(254)-555-0853",
      email: "funasTrust@gmail.com"
    },
    {
      bg: "#2980B9",
      img: "",
      name: "Exposito Drew",
      phone: "(322)-555-3467",
      email: "deveregrind@gmail.com"
    },
    {
      bg: "#06060B",
      img: "",
      name: "Hojlund",
      phone: "(443)-555-6783",
      email: "setunilever@gmail.com"
    },
  ]

  return (
    <div className="App">
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

export default First