import React from 'react';
import MenuAndLogo from './MenuAndLogo';
import SearchBar from './SearchBar';
import Navright from './Navright';

function Navbar() {
  return (
    <div className='w-full h-[50px] shadow-lg flex justify-between px-4 md:px-10 items-center'>
      <MenuAndLogo />
      <SearchBar />
      <Navright />
    </div>
  );
}

export default Navbar;
