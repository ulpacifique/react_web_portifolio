import React from 'react'
import One from '../Assets/single.png'
import Two from '../Assets/double.png'
import Three from '../Assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white' id='about'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white'  src={One}  alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$70</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>400gb storage</p>
                    <p className='py-2 border-b mx-8'>1 granted user</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                 </div>
                    <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>Start Trial</button>
            </div>
             <div className='w-full bg-gray-200 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white'  src={Two}  alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                <p className='text-center text-4xl font-bold'>$70</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>400gb storage</p>
                    <p className='py-2 border-b mx-8'>1 granted user</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                 </div>
                    <button className='bg-[#000000] text-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>Start Trial</button>
            </div>
             <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white'  src={Three}  alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Family</h2>
                <p className='text-center text-4xl font-bold'>$70</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>400gb storage</p>
                    <p className='py-2 border-b mx-8'>1 granted user</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                 </div>
                    <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>Start Trial</button>
            </div>
        </div>
        </div>
  );
};

export default Cards;