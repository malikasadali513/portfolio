import React from 'react'
import Skills from './Skills'
import {skillsData} from "../helpers/data"


function MainSkills(props) {
  return (
    <>
    <div name="skills" className='w-full h-screen bg-[#0a192f]  text-gray-300'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Skills</p>
          <p className='py-4'>// These are the Technologies I've worked with</p>
      </div>
      <div className='w-full gap-4 grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
          {skillsData.map((currSkill)=>(
            <Skills img={currSkill.img} name={currSkill.name} />
          ))}
      </div>
    </div>
  </div>
    <div>
    </div>
    </>
  )
}

export default MainSkills
