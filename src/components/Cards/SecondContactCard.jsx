import React from 'react'
import './Cards.css'

const SecondContactCard = (props) => {
    console.log(props.item);
  return (
    <div className='body'>
        <div className="card">
            {props.item.openSlots === 0 && <div className="badge">SOLD OUT</div>}
            <div style={{background: `${props.item.bg}`}} className="img">
                {/* <img src={props.item.img} alt="" /> */}
            </div>
            <h3>{props.item.name}</h3>
            <div className="">
                <p style={{marginBottom: '0.5rem'}}>Rating: {props.item.stats.rating}</p>
                <p>Review Count: {props.item.stats.reviewCount}</p>
            </div>
            <div className="flex">
                <h3>{props.item.location}</h3>
            </div>
            <p>{props.item.phone}</p>
            <h4>{props.item.email}</h4>
        </div>
    </div>
  )
}

export default SecondContactCard