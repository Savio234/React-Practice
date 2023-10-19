import React from 'react'
import './Cards.css'

const JokesCard = (props) => {
  return (
    <div className='bo-dy'>
        <div style={{background: `${props.bg}`}} className="joke-card">
            {props.joke && (<h3>Setup: <br /> {props.joke}</h3>)}
            {props.punchline && (<p>PunchLine: {props.punchline}</p>)}
            <h3>Upvotes: {props.upvote}</h3>
            <h3>DownVotes: {props.downvote}</h3>
        </div>
    </div>
  )
}

export default JokesCard