import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineClose } from "react-icons/md";
import { FcHome } from "react-icons/fc";

export default function Header() {
    const [toggle, setToggle] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // You can adjust the threshold value based on your needs
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Large screens */}
            <div className={` fixed-top hidden md:flex justify-between items-center md:px-6 lg:px-10 py-4 text-[16px]`}>
                <div className='flex items-center gap-x-2'>
                    {/* <img src={logo} alt='logo' className='w-[180px]' /> */}
                    <FcHome size={40}/>
                    <h1 className='font-bold text-xl hover:text-[#0eedaa] hover:scale-105 duration-200'>LUNA AZAL</h1>

                </div>
                <div>
                    <ul className='flex gap-x-5 font-semibold hover:cursor-pointer'>
                        <li className='hover:text-[#0eedaa] hover:scale-105 duration-200'>Home</li>
                        <li className='hover:text-[#0eedaa] hover:scale-105 duration-200'>About</li>
                        <li className='hover:text-[#0eedaa] hover:scale-105 duration-200'>Contact us</li>
                    </ul>
                </div>
            </div>

            {/* Mobile menu for small and medium screens */}
            <div className='md:hidden '>

                <div className='flex justify-between items-center py-5 px-3 fixed-top z-10'>

                    {/* This div is for logo */}
                    <div>
                        {/* <img src={logo} alt='logo' className='w-[180px]' /> */}
                        <h1 className='font-bold text-xl'>LUNA AZAL</h1>
                    </div>

                    {toggle ? (
                        <MdOutlineClose
                            onClick={() => setToggle(!toggle)}
                            className='shadow-sm text-black mr-2 hover:cursor-pointer transition-transform transform scale-95 duration-1000'
                            size={30}
                        />
                    ) : (
                        <AiOutlineMenu
                            onClick={() => setToggle(!toggle)}
                            className='mr-2 shadow-sm hover:cursor-pointer transition-transform duration-1000 scale-95  text-black'
                            size={30}
                        />
                    )}
                </div>

                <ul
                    className={`fixed h-screen w-[300px] bg-white z-10 top-[70px] transition-all ease-in-out duration-700
            ${toggle ? 'left-0' : 'left-[-100%]'} px-8 py-8`}
                >
                    <ul className='block items-center gap-x-11 flex-wrap'>

                        <li className='text-[18px] py-2 md:text-[24px]    my-2 hover:text-[#0eedaa] hover:scale-105 duration-200'>
                            Home
                        </li>

                        <li className='text-[18px] py-2 md:text-[24px]   my-2  hover:text-[#0eedaa] hover:scale-105 duration-200'>
                            About
                        </li>
                        <li className='text-[18px] py-2 md:text-[24px]    my-2 hover:text-[#0eedaa] hover:scale-105 duration-200'>
                            Contact us
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    );
}



