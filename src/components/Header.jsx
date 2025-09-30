import React from "react";

const Header = () => {
  return (
    <main>
      <div className="header-container absolute top-0 left-0 right-0 z-10 flex flex-col items-center justify-center h-[20vh] bg-transparent w-full">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-5xl text-center font-[Anton] text-white">
            Nawazish
          </h1>
        </div>

        <div>
          <ul className="flex gap-5 text-white cursor-pointer font-[Poppins] text-sm mt-5">
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              <a href="#whats-new">WHAT'S NEW</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              <a href="#high-jewellery">HIGH JEWELLERY</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              <a href="#fine-jewellery">FINE JEWELLERY</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              <a href="#womenswear">WOMENSWEAR</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              <a href="#menswear">MENSWEAR</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              <a href="#weddings">WEDDINGS</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              <a href="#accessories">ACCESSORIES</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              <a href="#world-of-nawazish">WORLD OF NAWAZISH</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Header;
