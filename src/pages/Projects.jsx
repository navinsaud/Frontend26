import React from 'react'
import {Project} from '../constants/Projects'

function Projects() {
  return (<>
      <div classname=" ">
        <div className="pt-16 ">
          <h1 className='text-center p-4'>projects</h1>
          <div className="grid grid-cols-3 border-2 border-gray-400 p-4 m-3">
            {
              Project.map((proj) => (
                <div className='border-2 border-gray-400 p-4 m-2 rounded-sm text-center' key={proj.id}>
                  <img src={proj.image} alt={proj.title} className=' ' />

                  <div>
                    <h2>{proj.title}</h2>
                    <p>{proj.desc}</p>
                  </div>

                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
