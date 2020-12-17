import React from 'react';
import Icons from './icons';

// define your loader  here
const LoaderBody = () => <Icons.Loader className='w-16 text-black animate-spin  ' />;

const Static = () => (
  <div className='w-full flex justify-center items-center flex-col '>
    <LoaderBody />
  </div>
);

const Absolute = () => (
  <div className='w-full h-full fixed left-0 top-0 flex justify-center items-center flex-col z-50 '>
    <div className='bg-gray-100 p-4 shadow-lg'>
      <LoaderBody />
    </div>
  </div>
);

export default { Absolute, Static };
