import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4 ' id='resources'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-5xl sm:text-3xl text-2xl'>Want tips& Trick to optimize your flows </h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
           <div className='flex flex-col sm:flex-row items-center justify-between w-full' >
            <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email'/>
          <button className='bg-[#00df9a]  text-black w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3'>Notify me</button>
          </div>
          <p>we care about the protection of your data. Reead our  <span className='text-[#00df9a]'>privacy Policy.</span></p>
           </div>
        </div>

    </div>
  );
};

export default Newsletter;