import React from 'react'
import SecondCard from './SecondCard'
import JokesData from './JokesData'

const Second = () => {
  return (
    <div>
        {
            JokesData.map(second => {
                return (
                    <SecondCard
                        key={second.id}
                        bg={second.bg}
                        joke={second.Setup}
                        punchline={second.Punchline}
                        upvote={second.upVotes}
                        downvote={second.downVotes}
                    />
                )
            })
        }
    </div>
  )
}

export default Second