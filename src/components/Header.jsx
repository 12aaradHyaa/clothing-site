import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main>
      <div className="header-container absolute top-0 left-0 right-0 z-50 flex flex-col items-center justify-center h-[20vh] lg:h-[20vh] md:h-[15vh] sm:h-[12vh] bg-transparent w-full pointer-events-auto px-4">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-center font-['Playfair_Display','Libre_Baskerville',serif] text-white">
            Nawazish
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex gap-3 xl:gap-5 text-white cursor-pointer font-['Playfair_Display','Libre_Baskerville',serif] text-xs xl:text-sm mt-3 xl:mt-5 flex-wrap justify-center">
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              <a href="#whats-new" className="block py-2 px-1">WHAT'S NEW</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              <a href="#high-jewellery" className="block py-2 px-1">HIGH JEWELLERY</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              <a href="#fine-jewellery" className="block py-2 px-1">FINE JEWELLERY</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              <a href="#womenswear" className="block py-2 px-1">WOMENSWEAR</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              <a href="#menswear" className="block py-2 px-1">MENSWEAR</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              <a href="#weddings" className="block py-2 px-1">WEDDINGS</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              <a href="#accessories" className="block py-2 px-1">ACCESSORIES</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              <a href="#world-of-nawazish" className="block py-2 px-1 whitespace-nowrap">WORLD OF NAWAZISH</a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden mt-2">
          <button 
            onClick={toggleMenu}
            className="text-white p-2 hover:text-gray-300 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm mt-2 mx-4 rounded-lg shadow-lg">
            <ul className="flex flex-col text-white font-['Playfair_Display','Libre_Baskerville',serif] text-sm py-4">
              <li className="cursor-pointer hover:bg-white/10 transition-colors duration-200">
                <a href="#whats-new" className="block py-3 px-6" onClick={() => setIsMenuOpen(false)}>WHAT'S NEW</a>
              </li>
              <li className="cursor-pointer hover:bg-white/10 transition-colors duration-200">
                <a href="#high-jewellery" className="block py-3 px-6" onClick={() => setIsMenuOpen(false)}>HIGH JEWELLERY</a>
              </li>
              <li className="cursor-pointer hover:bg-white/10 transition-colors duration-200">
                <a href="#fine-jewellery" className="block py-3 px-6" onClick={() => setIsMenuOpen(false)}>FINE JEWELLERY</a>
              </li>
              <li className="cursor-pointer hover:bg-white/10 transition-colors duration-200">
                <a href="#womenswear" className="block py-3 px-6" onClick={() => setIsMenuOpen(false)}>WOMENSWEAR</a>
              </li>
              <li className="cursor-pointer hover:bg-white/10 transition-colors duration-200">
                <a href="#menswear" className="block py-3 px-6" onClick={() => setIsMenuOpen(false)}>MENSWEAR</a>
              </li>
              <li className="cursor-pointer hover:bg-white/10 transition-colors duration-200">
                <a href="#weddings" className="block py-3 px-6" onClick={() => setIsMenuOpen(false)}>WEDDINGS</a>
              </li>
              <li className="cursor-pointer hover:bg-white/10 transition-colors duration-200">
                <a href="#accessories" className="block py-3 px-6" onClick={() => setIsMenuOpen(false)}>ACCESSORIES</a>
              </li>
              <li className="cursor-pointer hover:bg-white/10 transition-colors duration-200">
                <a href="#world-of-nawazish" className="block py-3 px-6" onClick={() => setIsMenuOpen(false)}>WORLD OF NAWAZISH</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
};

export default Header;
