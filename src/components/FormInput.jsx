import React from 'react';

export default function FormInput() {
  return (
    <span className='space-x-5 pt-8'>
      <input
        type='text'
        placeholder='Top Text'
        className='w-[230px] h-[35px] border-gray-500 border rounded-lg pl-3'
      />
      <input
        type='text'
        placeholder='Bottom Text'
        className='w-[230px] h-[35px] border-gray-500 border rounded-lg pl-3'
      />
    </span>
  );
}
