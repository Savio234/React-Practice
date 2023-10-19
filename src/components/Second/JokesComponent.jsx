import React from 'react'
import JokesCard from '../Cards/JokesCard'
import JokesData from '../../mock/JokesData'

const Second = () => {
  return (
    <div>
        {
            JokesData.map(jokes => {
                return (
                    <JokesCard
                        key={jokes.id}
                        bg={jokes.bg}
                        joke={jokes.Setup}
                        punchline={jokes.Punchline}
                        upvote={jokes.upVotes}
                        downvote={jokes.downVotes}
                    />
                )
            })
        }
    </div>
  )
}

export default Second