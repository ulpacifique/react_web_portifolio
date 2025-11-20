import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu after clicking
        setNav(false);
    }

    return (
        <div className='fixed top-0 left-0 w-full h-20  bg-black shadow-lg '> {/* Made navbar fixed and sticky */}
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>

                <ul className='hidden md:flex'>
                    <li 
                        className='p-4 cursor-pointer hover:text-[#00df9a] transition-colors' 
                        onClick={() => scrollToSection('hero')}
                    >
                        HOME
                    </li>
                    <li 
                        className='p-4 cursor-pointer hover:text-[#00df9a] transition-colors'
                        onClick={() => scrollToSection('analytics')}
                    >
                        COMPANY
                    </li>
                    <li 
                        className='p-4 cursor-pointer hover:text-[#00df9a] transition-colors'
                        onClick={() => scrollToSection('resources')}
                    >
                        RESOURCE
                    </li>
                    <li 
                        className='p-4 cursor-pointer hover:text-[#00df9a] transition-colors'
                        onClick={() => scrollToSection('about')}
                    >
                        ABOUT
                    </li>
                    <li 
                        className='p-4 cursor-pointer hover:text-[#00df9a] transition-colors'
                        onClick={() => scrollToSection('contact')}
                    >
                        CONTACT
                    </li>
                </ul>
                
                <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
                </div>
                
                <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 z-50' : 'fixed left-[-100%] ease-in-out duration-500'}>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
                    <ul className='pt-24 uppercase'>
                        <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={() => scrollToSection('hero')}>HOME</li>
                        <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={() => scrollToSection('analytics')}>COMPANY</li>
                        <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={() => scrollToSection('resources')}>RESOURCE</li>
                        <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={() => scrollToSection('about')}>ABOUT</li>
                        <li className='p-4 cursor-pointer' onClick={() => scrollToSection('contact')}>CONTACT</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar