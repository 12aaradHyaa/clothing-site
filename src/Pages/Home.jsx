import React from 'react'

const Home = () => {
  return (
    <div className='font-["Playfair_Display","Libre_Baskerville",serif]'>
      {/* Hero Section with Video */}
      <div className='relative w-full h-screen overflow-hidden'>
        {/* Video Background */}
        <div className='absolute inset-0'>
          <video 
            src="/9e81232196e346aa918fcfe4b3f956ed.mp4"
            autoPlay 
            loop 
            muted
            playsInline
            className='w-full h-full object-cover'
          />
        </div>
        
        {/* Content Overlay */}
        <div className='absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/20 pointer-events-none px-4'>
          <div className='text-center text-white max-w-4xl mx-auto pointer-events-auto'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 tracking-wider leading-tight'>
              LUXURY
            </h2>
            <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 sm:mb-8 tracking-wide'>
              Redefined
            </h3>
            <p className='text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 font-light px-4'>
              Discover our exclusive collection of timeless pieces that blend traditional craftsmanship with modern elegance
            </p>
            <button className='bg-white text-black px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm tracking-widest font-medium hover:bg-gray-100 transition-colors duration-300 rounded-sm'>
              EXPLORE COLLECTION
            </button>
          </div>
        </div>
      </div>

      {/* Shop By Categories Section */}
      <section className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center sm:text-left'>Shop By Categories</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
            {/* Chic Essentials */}
            <div className='rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md'>
              <div className='aspect-square p-6 sm:p-8'>
                <img src="/D1.jpg" alt="Anarkali Suits" className='w-full h-full object-contain hover:scale-110 transition-transform duration-300' />
              </div>
              <div className='p-4 text-center'>
                <h3 className='text-base sm:text-lg font-medium text-gray-800 flex items-center justify-center'>
                  Anarkali Suits <span className='ml-2'>→</span>
                </h3>
              </div>
            </div>

            {/* Motorsport */}
            <div className='rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md'>
              <div className='aspect-square p-6 sm:p-8'>
                <img src="/D2.jpg" alt="Lehengas" className='w-full h-full object-contain hover:scale-110 transition-transform duration-300' />
              </div>
              <div className='p-4 text-center'>
                <h3 className='text-base sm:text-lg font-medium text-gray-800 flex items-center justify-center'>
                  Lehengas <span className='ml-2'>→</span>
                </h3>
              </div>
            </div>

            {/* Hoodies */}
            <div className='rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md'>
              <div className='aspect-square p-6 sm:p-8'>
                <img src="/D3.jpg" alt="Sharara Sets" className='w-full h-full object-contain hover:scale-110 transition-transform duration-300' />
              </div>
              <div className='p-4 text-center'>
                <h3 className='text-base sm:text-lg font-medium text-gray-800 flex items-center justify-center'>
                  Sharara Sets <span className='ml-2'>→</span>
                </h3>
              </div>
            </div>

            {/* Elite Drop */}
            <div className='rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md'>
              <div className='aspect-square p-6 sm:p-8'>
                <img src="/D4.jpg" alt="Palazzo Suits" className='w-full h-full object-contain hover:scale-110 transition-transform duration-300' />
              </div>
              <div className='p-4 text-center'>
                <h3 className='text-base sm:text-lg font-medium text-gray-800 flex items-center justify-center'>
                  Palazzo Suits <span className='ml-2'>→</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-black'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {/* Product 1 */}
            <div className='bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300'>
              <div className='aspect-square relative overflow-hidden'>
                <img src="/D5.jpg" alt="Royal Embroidered Lehenga" className='w-full h-full object-cover hover:scale-110 transition-transform duration-300' />
                <span className='absolute top-3 sm:top-4 left-3 sm:left-4 bg-gray-800 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm rounded'>Sale</span>
              </div>
              <div className='p-4 sm:p-6'>
                <h3 className='text-base sm:text-lg font-medium text-gray-800 mb-2 line-clamp-2'>Royal Embroidered Lehenga</h3>
                <div className='flex items-center space-x-2'>
                  <span className='text-sm sm:text-base text-gray-500 line-through'>Rs. 2,000.00</span>
                  <span className='text-sm sm:text-base text-gray-900 font-semibold'>Rs. 1,199.00</span>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className='bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300'>
              <div className='aspect-square relative overflow-hidden'>
                <img src="/D6.jpg" alt="Designer Anarkali Suit" className='w-full h-full object-cover hover:scale-110 transition-transform duration-300' />
                <span className='absolute top-3 sm:top-4 left-3 sm:left-4 bg-gray-800 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm rounded'>Sale</span>
              </div>
              <div className='p-4 sm:p-6'>
                <h3 className='text-base sm:text-lg font-medium text-gray-800 mb-2 line-clamp-2'>Designer Anarkali Suit</h3>
                <div className='flex items-center space-x-2'>
                  <span className='text-sm sm:text-base text-gray-500 line-through'>Rs. 1,500.00</span>
                  <span className='text-sm sm:text-base text-gray-900 font-semibold'>Rs. 999.00</span>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className='bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300'>
              <div className='aspect-square relative overflow-hidden'>
                <img src="/D7.jpg" alt="Elegant Sharara Set" className='w-full h-full object-cover hover:scale-110 transition-transform duration-300' />
                <span className='absolute top-3 sm:top-4 left-3 sm:left-4 bg-gray-800 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm rounded'>Sale</span>
              </div>
              <div className='p-4 sm:p-6'>
                <h3 className='text-base sm:text-lg font-medium text-gray-800 mb-2 line-clamp-2'>Elegant Sharara Set</h3>
                <div className='flex items-center space-x-2'>
                  <span className='text-sm sm:text-base text-gray-500 line-through'>Rs. 1,299.00</span>
                  <span className='text-sm sm:text-base text-gray-900 font-semibold'>Rs. 799.00</span>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className='bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300'>
              <div className='aspect-square relative overflow-hidden'>
                <img src="/D8.jpg" alt="Bridal Palazzo Suit" className='w-full h-full object-cover hover:scale-110 transition-transform duration-300' />
                <span className='absolute top-3 sm:top-4 left-3 sm:left-4 bg-gray-800 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm rounded'>Sale</span>
              </div>
              <div className='p-4 sm:p-6'>
                <h3 className='text-base sm:text-lg font-medium text-gray-800 mb-2 line-clamp-2'>Bridal Palazzo Suit</h3>
                <div className='flex items-center space-x-2'>
                  <span className='text-sm sm:text-base text-gray-500 line-through'>Rs. 1,800.00</span>
                  <span className='text-sm sm:text-base text-gray-900 font-semibold'>Rs. 1,099.00</span>
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className='bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300'>
              <div className='aspect-square relative overflow-hidden'>
                <img src="/D9.jpg" alt="Festive Gharara Set" className='w-full h-full object-cover hover:scale-110 transition-transform duration-300' />
                <span className='absolute top-3 sm:top-4 left-3 sm:left-4 bg-gray-800 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm rounded'>Sale</span>
              </div>
              <div className='p-4 sm:p-6'>
                <h3 className='text-base sm:text-lg font-medium text-gray-800 mb-2 line-clamp-2'>Festive Gharara Set</h3>
                <div className='flex items-center space-x-2'>
                  <span className='text-sm sm:text-base text-gray-500 line-through'>Rs. 1,600.00</span>
                  <span className='text-sm sm:text-base text-gray-900 font-semibold'>Rs. 999.00</span>
                </div>
              </div>
            </div>

            {/* Product 6 */}
            <div className='bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300'>
              <div className='aspect-square relative overflow-hidden'>
                <img src="/D10.jpg" alt="Luxury Silk Saree" className='w-full h-full object-cover hover:scale-110 transition-transform duration-300' />
                <span className='absolute top-3 sm:top-4 left-3 sm:left-4 bg-gray-800 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm rounded'>Sale</span>
              </div>
              <div className='p-4 sm:p-6'>
                <h3 className='text-base sm:text-lg font-medium text-gray-800 mb-2 line-clamp-2'>Luxury Silk Saree</h3>
                <div className='flex items-center space-x-2'>
                  <span className='text-sm sm:text-base text-gray-500 line-through'>Rs. 2,200.00</span>
                  <span className='text-sm sm:text-base text-gray-900 font-semibold'>Rs. 1,399.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Wear Showcase Section */}
      <section className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-8 sm:mb-12'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>Traditional Excellence</h2>
            <p className='text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4'>
              Discover our exquisite collection of traditional wear that celebrates timeless elegance and cultural heritage
            </p>
          </div>
          
          <div className='relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl'>
            <img 
              src="/ALL1.jpg" 
              alt="Traditional Wear Collection" 
              className='w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-in-out'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'></div>
            <div className='absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 text-white'>
              <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4'>Crafted with Tradition</h3>
              <p className='text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-2xl'>
                Each piece tells a story of heritage, artistry, and timeless beauty
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home