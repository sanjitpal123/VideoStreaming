import React from 'react';
import MenuAndLogo from './MenuAndLogo';
import SearchBar from './SearchBar';
import Navright from './Navright';

function Navbar() {
  return (
    <div className='w-full h-[75px]  bg-gray-900 shadow-lg border-b-2 flex justify-between px-4 md:px-10 items-center fixed top-0 z-[1] ' >
      <MenuAndLogo />
      <SearchBar />
      <Navright />
    </div>
  );
}

export default Navbar;
