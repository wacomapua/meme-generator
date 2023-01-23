import React from 'react';

export default function GetImage() {
  return (
    <div className='pt-5'>
      <button
        className='w-[477px] h-[40px] text-sm bg-[#672280] 
        rounded-md text-white font-sans antialiased 
        bg-gradient-to-l from-[#A818DA]
        hover:opacity-80'
      >
        Get a new meme Image 🖼
      </button>
      <div className='w-[477px] h-[268px] pt-10'>
        <img src='./memeimg.png' alt='meme' />
      </div>
    </div>
  );
}
