import React from 'react'
import './Second.css'

const SecondCard = (props) => {
  return (
    <div className='body'>
        <div style={{background: `${props.bg}`}} className="cards">
            {props.joke && (<h3>Setup: <br /> {props.joke}</h3>)}
            {props.punchline && (<p>PunchLine: {props.punchline}</p>)}
            <h3>Upvotes: {props.upvote}</h3>
            <h3>DownVotes: {props.downvote}</h3>
        </div>
    </div>
  )
}

export default SecondCard