import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className=' h-full w-full bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/38bb7006-be39-4201-91c9-e59b606dc57a" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4 font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>// Submit the form or shoot me a e-mail - asadalibhutta513@gmail.com</p>
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" name="name" placeholder='Name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" name="name" placeholder='E-mail'/>
        <textarea className="bg-[#ccd6f6] p-2" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
