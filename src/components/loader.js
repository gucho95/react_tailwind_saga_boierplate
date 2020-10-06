import React from "react";
import Icons from "./icons";

// define your loader  here
const LoaderBody = () => <Icons.Loader className='w-16 text-black animate-spin  ' />;

const Static = () => (
  <div className='w-full flex justify-center items-center flex-col '>
    <LoaderBody />
    <p className='font-black uppercase text-center text-xl mt-2'>Loading ...</p>
  </div>
);

const Absolute = () => (
  <div className='w-full h-full fixed left-0 top-0 flex justify-center items-center flex-col z-50 '>
    <LoaderBody />
    <p className='font-black uppercase text-center text-xl mt-2 animate-bounce'>Loading ...</p>
  </div>
);

export default { Absolute, Static };
