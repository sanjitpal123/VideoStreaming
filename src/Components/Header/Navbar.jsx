import React from 'react';
import MenuAndLogo from './MenuAndLogo';
import SearchBar from './SearchBar';
import Navright from './Navright';

function Navbar() {
  return (
    <div className='w-full h-[60px]  shadow-lg border-b-2 flex justify-between px-4 md:px-10 items-center fixed z-[1] bg-white' >
      <MenuAndLogo />
      <SearchBar />
      <Navright />
    </div>
  );
}

export default Navbar;
