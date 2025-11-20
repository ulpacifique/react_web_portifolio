import React from 'react'
import Download from '../Assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id='analytics'>
        <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Download} alt="/" />

            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DASHBOARD PAGES</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Let's build better digital website together</h1>
                <p >
                    I build and engineer digital solutions that are not only functional but also fast,
                     scalable, and a pleasure to use. With a passion for clean code and a keen eye for
                      user-centric design, I specialize in turning complex problems into elegant, 
                      efficient software. Take a look at my projects to see how I can bring value to your
                       next challenge.
                </p>
                 <button className='bg-[#000000] text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0'>Get started</button>
            </div>

        </div>
    </div>
  )
}

export default Analytics