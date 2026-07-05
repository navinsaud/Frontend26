import React from 'react'

function About() {
  return (<>
    <div className='bg-amber-50'>
      <div className='text-center pt-20  md:pt-25'>
        <h1 className='font-bold text-green-500 text-4xl m-4 '>About Me</h1>
        <p className='p-4'>Hello, I am newo saud. a passionate full stack developer from Nepal enjoy building responsive and user friendly web applications.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam reprehenderit, illum voluptas, incidunt nesciunt earum suscipit
          nobis quaerat totam nemo magni unde eius ipsam, exercitationem reiciendis esse! Laudantium, accusamus alias. </p>
        <p >I love learning new technology, solving problems and creating modern websites that provide great user experiences.</p><br /><br />
      </div>
      <div className='flex justify-center text-center'>
        <div className='max-w-md bg-amber-200 border-2 rounded-xl mb-8 p-2'>
          <h1 className='flex justify-center text-xl text-green-800 font-semibold'>
            MY FULL STACK KNOWLEDGE AND SKILLS.
          </h1>

          <div className='flex flex-col text-center m-4'>
            <div className='flex justify-center'>
              <label className='border-2 rounded-md w-60 bg-amber-800 text-white m-2 p-1 shadow-fuchsia-500 '>
                HTML CSS and JavaScript
              </label>
            </div>
            <div className='flex justify-center' >
              <label className='border-2 rounded-md w-60 bg-amber-700 text-white m-2 p-1'>
                User Interface (UI)
              </label>
            </div>
            <div className='flex justify-center'>
              <label className='border-2 rounded-md w-60 bg-amber-800 text-white m-2 p-1'>
                DataBase
              </label>
            </div>
            <div className='flex justify-center'>
              <label className='border-2 rounded-md w-60 bg-amber-700 text-white m-2 p-1'>
                React JS and TailWind CSS
              </label>
            </div>
            <div className='flex justify-center'>
              <label className='border-2 rounded-md w-60 bg-amber-800 text-white m-2 p-1'>
                MongoDB, Express and NodesJS
              </label>
            </div>
            <div className='flex justify-center'>
              <label className='border-2 rounded-md w-60 bg-amber-700 text-white m-2 p-1'>
                Git and Github
              </label>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>)
}

export default About
