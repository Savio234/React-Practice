import React from 'react'
import { MdLocationPin } from 'react-icons/md'
import './Cards.css'

const ProjectCard = (props) => {
  return (
    <div className='flex project-card'>
        <div className="card-image">
            <img src={props.imageURL} alt="" />
        </div>
        <div className="card-content">
            <div className="locationContainer flex">
                <div className="flex location">
                    <div className='location-icon'>
                        <MdLocationPin style={{height: 20, width: 20}} />
                    </div>
                    <h3>{props.location}</h3>
                </div>
                <a href={props.googleMapsUrl} target='_blank' rel='noreferrer'>
                    View on Google Maps
                </a>
            </div>

            <div className="title">
                <h1>{props.title}</h1>
            </div>

            <div className="timeFrame">
                <span>{props.startDate}</span> - <span>{props.endDate}</span>
            </div>

            <div className="description">
                <p>{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard