import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';



const Navbar = () => {
    const [open, setOpen] = useState(false);

    const menuItems = <>
        <li><Link href="/" className='font-semibold px-5  cursor-pointer hover:text-[#64A665]'>Home</Link></li>
        <li><Link href="/#services" className='font-semibold px-5  cursor-pointer hover:text-[#64A665]'>Services</Link></li>
        <li><Link href="/#about" className='font-semibold px-5  cursor-pointer hover:text-[#64A665]'>About us</Link></li>
        <li><Link href="/#testimonials" className='font-semibold px-5  cursor-pointer hover:text-[#64A665]'>Testimonials</Link></li>
    </>

    // console.log(open);




    return (
        <>
            <nav className='bg-[#f4f7f2] flex items-center justify-between py-6 px-14' id='home'>
                <h2 className='text-2xl font-bold cursor-pointer'>DentFirst</h2>

                <ul className='hidden lg:flex  lg:flex-row items-center gap-4 '>
                    {menuItems}
                </ul>


                <button onClick={() => setOpen(!open)} className='block lg:hidden '>
                    {
                        !open ? <AiOutlineMenu className='text-3xl' /> : <AiOutlineClose className='text-3xl' />
                    }
                </button>
            </nav>


            {
                open ?
                    <div className='bg-[#666A7B] text-[#f4f7f2] rounded w-60   py-7 z-100 fixed'>
                        <ul className=' lg:hidden flex flex-col items-start gap-5 '>
                            {menuItems}
                        </ul>
                    </div>
                    :
                    ""
            }
        </>
    );
};

export default Navbar;