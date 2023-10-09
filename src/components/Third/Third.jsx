import React from 'react'
import ProjectCard from '../Contact/ProjectCard'
import ProjectData1 from '../../mock/ProjectData1'
import './Third.css'

const Third = () => {
  return (
    <div className='projectBody'>
      {
        ProjectData1.map(data => {
          return (
            <ProjectCard
              key={data.title}
              {...data}
            />
          )
        })
      }
    </div>
  )
}

export default Third