import React, { useState } from 'react';
import { PiHandbagSimpleThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import watchHero from '../assets/watch.jpg'; // Make sure image is placed here

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-greeen h-[600px]">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 pl-10 pt-6 pb-2 bg-greeen text-white">
        <h1 className="text-5xl font-logo">Time Crafters</h1>
        {/* Desktop Icons */}
        <div className="hidden md:flex gap-7 text-4xl text-white">
          <CiSearch />
          <PiHandbagSimpleThin />
          <CiUser />
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-4xl "
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
  <div className="md:hidden flex flex-col items-center gap-4 pt-2 bg-greeen z-20">
  <CiSearch className="text-3xl text-white" />
  <PiHandbagSimpleThin className="text-3xl text-white" />
  <CiUser className="text-3xl text-white" />
</div>
)}

      {/* Hero Section */}
      <div className="relative w-full h-[600px] bg-greeen px-5 pb-4 pt-2">
        <img
          src={watchHero}
          alt="Hero Watch"
          className="shadow-xl rounded-3xl w-full h-full object-cover"
        />

        {/* Overlay content */}
        <div className="absolute bottom-[19%] left-[12%] flex flex-col items-start justify-center px-4 py-2 rounded-md">
          <h2 className="text-white font-bond m-4 text-left text-4xl md:text-7xl">
            <span>James Bond's</span> <span className="block">Choice</span>
          </h2>
          <input
            type="text"
            placeholder="DISCOVER"
            className="focus:placeholder-transparent text-gray-800 placeholder-grey-800 rounded-full text-lg md:text-2xl w-32 h-12 md:w-48 md:h-16 text-center bg-greeen shadow-md focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;