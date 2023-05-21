import  './WorkCardStyle.css';

import React from 'react'

import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData'

function Work() {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className="project-container">
            
                {WorkCardData.map((element,ind)=>{
                    return (
                    <WorkCard key={ind} imgsrc={element.imgsrc} title={element.title} text={element.text} view={element.view}/>
                    ) 
                })}
            
        </div>
    </div>
  )
}

export default Work