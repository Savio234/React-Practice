import React from 'react'
import './Contact.css'

const Contact = (props) => {
  return (
    <div className='body'>
        <div className="card">
            <div style={{background: `${props.bg}`}} className="img">
                <img src={props.img} alt="" />
            </div>
            <h3>{props.name}</h3>
            <p>{props.phone}</p>
            <h4>{props.email}</h4>
        </div>
    </div>
  )
}

export default Contact