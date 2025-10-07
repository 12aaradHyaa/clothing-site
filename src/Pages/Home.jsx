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
            className='w-full h-full object-cover'
          />
        </div>
        
        {/* Content Overlay */}
        <div className='absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/20 pointer-events-none'>
          <div className='text-center text-white px-4 pointer-events-auto'>
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

      {/* Shop By Categories Section */}
      <section className='py-16 px-4 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-gray-900 mb-12 text-left'>Shop By Categories</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* Chic Essentials */}
            <div className='rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer'>
              <div className='aspect-square p-8'>
                <img src="/D1.jpg" alt="Chic Essentials" className='w-full h-full object-contain hover:scale-110 transition-transform duration-300' />
              </div>
              <div className='p-4 text-center'>
                <h3 className='text-lg font-medium text-gray-800 flex items-center justify-center'>
                  Chic Essentials <span className='ml-2'>→</span>
                </h3>
              </div>
            </div>

            {/* Motorsport */}
            <div className='rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer'>
              <div className='aspect-square p-8'>
                <img src="/D2.jpg" alt="Motorsport" className='w-full h-full object-contain hover:scale-110 transition-transform duration-300' />
              </div>
              <div className='p-4 text-center'>
                <h3 className='text-lg font-medium text-gray-800 flex items-center justify-center'>
                  Motorsport <span className='ml-2'>→</span>
                </h3>
              </div>
            </div>

            {/* Hoodies */}
            <div className='rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer'>
              <div className='aspect-square p-8'>
                <img src="/D3.jpg" alt="Hoodies" className='w-full h-full object-contain hover:scale-110 transition-transform duration-300' />
              </div>
              <div className='p-4 text-center'>
                <h3 className='text-lg font-medium text-gray-800 flex items-center justify-center'>
                  Hoodies <span className='ml-2'>→</span>
                </h3>
              </div>
            </div>

            {/* Elite Drop */}
            <div className='rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer'>
              <div className='aspect-square p-8'>
                <img src="/D4.jpg" alt="Elite Drop" className='w-full h-full object-contain hover:scale-110 transition-transform duration-300' />
              </div>
              <div className='p-4 text-center'>
                <h3 className='text-lg font-medium text-gray-800 flex items-center justify-center'>
                  Elite Drop <span className='ml-2'>→</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className='py-16 px-4 bg-black'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Product 1 */}
            <div className='bg-white rounded-lg overflow-hidden cursor-pointer'>
              <div className='aspect-square relative overflow-hidden'>
                <img src="/D5.jpg" alt="The Godfather Oversized T-shirt" className='w-full h-full object-cover hover:scale-110 transition-transform duration-300' />
                <span className='absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 text-sm rounded'>Sale</span>
              </div>
              <div className='p-6'>
                <h3 className='text-lg font-medium text-gray-800 mb-2'>The Godfather Oversized T-shirt</h3>
                <div className='flex items-center space-x-2'>
                  <span className='text-gray-500 line-through'>Rs. 2,000.00</span>
                  <span className='text-gray-900 font-semibold'>Rs. 1,199.00</span>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className='bg-white rounded-lg overflow-hidden cursor-pointer'>
              <div className='aspect-square relative overflow-hidden'>
                <img src="/D6.jpg" alt="Fast & Furious Oversized Tshirt" className='w-full h-full object-cover hover:scale-110 transition-transform duration-300' />
                <span className='absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 text-sm rounded'>Sale</span>
              </div>
              <div className='p-6'>
                <h3 className='text-lg font-medium text-gray-800 mb-2'>Fast & Furious Oversized Tshirt</h3>
                <div className='flex items-center space-x-2'>
                  <span className='text-gray-500 line-through'>Rs. 1,500.00</span>
                  <span className='text-gray-900 font-semibold'>Rs. 999.00</span>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className='bg-white rounded-lg overflow-hidden cursor-pointer'>
              <div className='aspect-square relative overflow-hidden'>
                <img src="/D7.jpg" alt="Carved Beauty Oversized T-Shirt" className='w-full h-full object-cover hover:scale-110 transition-transform duration-300' />
                <span className='absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 text-sm rounded'>Sale</span>
              </div>
              <div className='p-6'>
                <h3 className='text-lg font-medium text-gray-800 mb-2'>Carved Beauty Oversized T-Shirt</h3>
                <div className='flex items-center space-x-2'>
                  <span className='text-gray-500 line-through'>Rs. 1,299.00</span>
                  <span className='text-gray-900 font-semibold'>Rs. 799.00</span>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className='bg-white rounded-lg overflow-hidden cursor-pointer'>
              <div className='aspect-square relative overflow-hidden'>
                <img src="/D8.jpg" alt="Street Style T-Shirt" className='w-full h-full object-cover hover:scale-110 transition-transform duration-300' />
                <span className='absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 text-sm rounded'>Sale</span>
              </div>
              <div className='p-6'>
                <h3 className='text-lg font-medium text-gray-800 mb-2'>Street Style T-Shirt</h3>
                <div className='flex items-center space-x-2'>
                  <span className='text-gray-500 line-through'>Rs. 1,800.00</span>
                  <span className='text-gray-900 font-semibold'>Rs. 1,099.00</span>
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className='bg-white rounded-lg overflow-hidden cursor-pointer'>
              <div className='aspect-square relative overflow-hidden'>
                <img src="/D9.jpg" alt="Racing Edition T-Shirt" className='w-full h-full object-cover hover:scale-110 transition-transform duration-300' />
                <span className='absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 text-sm rounded'>Sale</span>
              </div>
              <div className='p-6'>
                <h3 className='text-lg font-medium text-gray-800 mb-2'>Racing Edition T-Shirt</h3>
                <div className='flex items-center space-x-2'>
                  <span className='text-gray-500 line-through'>Rs. 1,600.00</span>
                  <span className='text-gray-900 font-semibold'>Rs. 999.00</span>
                </div>
              </div>
            </div>

            {/* Product 6 */}
            <div className='bg-white rounded-lg overflow-hidden cursor-pointer'>
              <div className='aspect-square relative overflow-hidden'>
                <img src="/D10.jpg" alt="Premium Collection T-Shirt" className='w-full h-full object-cover hover:scale-110 transition-transform duration-300' />
                <span className='absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 text-sm rounded'>Sale</span>
              </div>
              <div className='p-6'>
                <h3 className='text-lg font-medium text-gray-800 mb-2'>Premium Collection T-Shirt</h3>
                <div className='flex items-center space-x-2'>
                  <span className='text-gray-500 line-through'>Rs. 2,200.00</span>
                  <span className='text-gray-900 font-semibold'>Rs. 1,399.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Wear Showcase Section */}
      <section className='py-16 px-4 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Traditional Excellence</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Discover our exquisite collection of traditional wear that celebrates timeless elegance and cultural heritage
            </p>
          </div>
          
          <div className='relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl'>
            <img 
              src="/ALL1.jpg" 
              alt="Traditional Wear Collection" 
              className='w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-in-out'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>
            <div className='absolute bottom-8 left-8 right-8 text-white'>
              <h3 className='text-3xl md:text-4xl font-bold mb-4'>Crafted with Tradition</h3>
              <p className='text-lg md:text-xl font-light max-w-2xl'>
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