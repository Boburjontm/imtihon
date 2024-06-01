import React from 'react'
import guln1 from '../../../public/img/whiteflow.svg'

const Hero4 = () => {
  return (
    <div>
      <h1 className='flex justify-center mt-12 text-2xl font-bold'>Our Blog Posts</h1>
      <p className='flex justify-center text-gray-600 mt-4'>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
      <div className="cards">
        <div className="card">
            <img src={guln1} alt="" />
            
        </div>
      </div>
    </div>
  )
}

export default Hero4
