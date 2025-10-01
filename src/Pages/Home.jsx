import React from 'react'

const Home = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* Video Background */}
      <div className='absolute inset-0'>
        <video 
          src="/9e81232196e346aa918fcfe4b3f956ed.mp4"
          autoPlay 
          loop 
          muted
          className='w-full h-full object-cover'
        />
      </div>
      
      {/* Content Overlay */}
      <div className='absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/20'>
        <div className='text-center text-white px-4'>
          <h2 className='text-6xl md:text-8xl font-bold mb-6 tracking-wider'>
            LUXURY
          </h2>
          <h3 className='text-2xl md:text-4xl font-light mb-8 tracking-wide'>
            Redefined
          </h3>
          <p className='text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light'>
            Discover our exclusive collection of timeless pieces that blend traditional craftsmanship with modern elegance
          </p>
          <button className='bg-white text-black px-8 py-3 text-sm tracking-widest font-medium hover:bg-gray-100 transition-colors duration-300'>
            EXPLORE COLLECTION
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home