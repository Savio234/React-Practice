import React from 'react'
import './Contact.css'

const Contact = (props) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const today = Date.parse(currentDate);
  const workingDate = `${month}  ${day}, ${year}`;
  console.log('Today', today, '...', 'Working Date', workingDate)

  return (
    <div className='body'>
        <div className="card">
            <div style={{background: `${props.bg}`}} className="img">
                {/* <img src={props.img} alt="" /> */}
            </div>
            <h3>{props.name}</h3>
            <p>{props.phone}</p>
            <h4>{props.email}</h4>
        </div>
    </div>
  )
}

export default Contact