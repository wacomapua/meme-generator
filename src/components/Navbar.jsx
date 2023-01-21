import React from 'react';

export default function Navbar() {
  return (
    <div className='bg-[#672280] w-[500px] h-[65px] flex place-content-between bg-gradient-to-l from-[#A818DA]'>
      <img
        src='/trollface.png'
        alt='Problem?'
        className='w-[58px] h-[45px] pt-3 pl-5 pr-1 relative'
      />
      <span className='text-white font-bold text-xl pl-16 pt-4 font-sans absolute'>
        Meme Generator
      </span>
      <span className='text-white text-sm pt-5 pr-5'>
        React Course - Project 3
      </span>
    </div>
  );
}
