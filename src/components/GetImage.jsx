import React from 'react';
import { useState } from 'react';

export default function GetImage() {
  const [url, setUrl] = useState('');
  async function getMemeData() {
    try {
      const response = await fetch('https://meme-api.com/gimme/1');
      const responseJson = await response.json();
      console.log(responseJson.memes[0].url);
      setUrl(responseJson.memes[0].url);
      return responseJson.memes[0].url;
    } catch (error) {
      console.error(error);
    }
  }
  // if (!props.value) {
  //   getMemeData();
  //   // props.url = url;
  // }
  // export default function memeSlug() {
  //   return (
  //     memeUrl = responseJson.memes[0].postLink;
  //   )
  // }

  return (
    <div className='pt-5'>
      <button
        onClick={getMemeData}
        className='w-[477px] h-[40px] text-sm bg-[#672280] 
        rounded-md text-white font-sans antialiased 
        bg-gradient-to-l from-[#A818DA]
        hover:opacity-80'
      >
        Get a new meme Image 🖼
      </button>
      <div className='w-[477px] h-[268px] pt-10'>
        <img src={url} alt='meme' />
      </div>
    </div>
  );
}
