import React from 'react'
import { Project } from '../constants/Projects'

function Projects() {
  return (<>

    <div className="flex flex-col relative gap-12 bg-amber-100 p-10">
      <div >
        <h1 className='flex justify-center top-10 font-bold text-green-500 mt-10 md:mt-8 text-4xl'>
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 border-2 border-gray-400 p-4 m-2">
        {
          Project.map((proj) => (
            <div className='border-2 border-gray-400 bg-green-400 p-4 m-2 rounded-sm text-center' key={proj.id}>
              <img src={proj.img} alt={proj.title} className='rounded-md '/>

              <div>
                <h2 className='text-white mt-4'>{proj.title}</h2>
                <p>{proj.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>

  </>
  )
}

export default Projects
