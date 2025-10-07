import React from "react";

const Header = () => {
  return (
    <main>
      <div className="header-container absolute top-0 left-0 right-0 z-50 flex flex-col items-center justify-center h-[20vh] bg-transparent w-full pointer-events-auto">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-5xl text-center font-['Playfair_Display','Libre_Baskerville',serif] text-white">
            Nawazish
          </h1>
        </div>

        <div>
          <ul className="flex gap-5 text-white cursor-pointer font-['Playfair_Display','Libre_Baskerville',serif] text-sm mt-5">
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
              <a href="#world-of-nawazish" className="block py-2 px-1">WORLD OF NAWAZISH</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Header;
