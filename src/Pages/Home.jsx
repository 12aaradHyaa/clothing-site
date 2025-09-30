import React from 'react'

const Home = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <div className='absolute inset-0'>
        <video 
          src="/9e81232196e346aa918fcfe4b3f956ed.mp4"
          autoPlay 
          loop 
          muted
          className='w-full h-full object-cover'
        ></video>
      </div>
    </div>
  )
}

export default Home