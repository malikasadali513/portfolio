import React from 'react'

const WorkEx = (props) => {
  return (
    <div>
    <div
    style={{ background: `url(${props.bgImg})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
    flex justify-center text-center items-center mx-auto content-div"
  >
  
    <div className="opacity-0 group-hover:opacity-100">
      <span className="text-2xl font bold text-white tracking-wider">
        React JS Application
      </span>
      <div className="pt-8 text-center">
        <a href="/">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
               bg-white text-gray-700 font-bold text-lg"
          >
            Demo
          </button>
        </a>
        <a href="/">
          <button className="text-center rounded-lg px-4 py-3 n-2 bg-white text-gray-700 font-bold text-lg">
            Code
          </button>
        </a>
      </div>
    </div>
  </div>
    </div>
  )
}

export default WorkEx
