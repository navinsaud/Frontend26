import React from 'react'

function About() {
  return (<>
    <div className='flex flex-col gap-2 bg-slate-300'>
      <div className='text-center md:pt-25 p-2'>
        <h1 className='font-bold relative mt-10 mb-8 md:mt-1 md:pt-1 pt-10 bg-red-00 text-green-500 text-4xl '>About me</h1>
        <p>Hello, My name is Navin Saud, and I recently completed my Bachelor's degree in Computer Engineering from Pokhara University. During my studies, I built a strong foundation in programming, data structures, database management systems, computer networks, and web development. </p> <br />
        <p>I have completed MERN Stack Development training from Broadway Infosys, where I gained hands-on experience with React.js, Node.js, Express.js, and MongoDB. I have also worked on several academic projects, including an AI-based automatic attendance system with an intelligent chatbot, a voice-controlled obstacle avoidance robot, and a transportation management system. </p> <br />
        <p>In addition to my technical skills, I have one year of experience as a Technical Support professional at Paradigm Engineering Consultancy and three months as an L1 Support Engineer at Vianet Communications. These roles helped me develop strong troubleshooting, communication, and customer support skills while working in fast-paced environments. </p> <br />
        <p>I enjoy learning new technologies, solving real-world problems, and working collaboratively with teams. I am now looking for an opportunity where I can apply my technical knowledge, continue developing my skills, and contribute as a software developer while growing professionally. <br /><br />
        </p>
      </div>
      <div className='flex justify-center text-center'>
        <div className='max-w-md bg-amber-200 border-2 rounded-xl mb-8 p-2'>
          <h1 className='flex justify-center text-xl text-green-800 font-semibold'>
            KNOWLEDGE AND SKILLS.
          </h1>

          <div className='flex flex-col text-center m-4'>
            <div className='flex justify-center'>
              <label className='border-2 rounded-md w-60 bg-amber-800 text-white m-2 p-1 shadow-fuchsia-500 '>
                HTML, CSS and JavaScript
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
