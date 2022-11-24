import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[fafafa] p-10 px-14 '>
            <div className='flex flex-col lg:flex-row lg:items-start gap-5 justify-between'>
                <div >
                    <h2 className='text-2xl font-bold cursor-pointer'>DentFirst</h2>
                    <p className='mt-3 lg:mt-7 text-[#666A7B] w-[390px]'>With several services that you will choose, we will always give our best with respect to our hospitality and hassle free experience.</p>
                </div>

                <div >
                    <h2 className='text-2xl font-bold '>Useful Links</h2>
                    <ul className='flex flex-col gap-2 lg:items-center mt-3 lg:mt-7'>
                        <li><a href="#" className='font-semibold  cursor-pointer hover:text-[#64A665] '>Home</a></li>
                        <li><a href="#" className='font-semibold  cursor-pointer hover:text-[#64A665] '>Services</a></li>
                        <li><a href="#" className='font-semibold cursor-pointer hover:text-[#64A665]'>About us</a></li>
                        <li><a href="#" className='font-semibold  cursor-pointer hover:text-[#64A665]'>Testimonials</a></li>
                    </ul>
                </div>

                <div >

                    <h2 className='text-2xl font-bold '>Address</h2>
                    <p className='mt-3 lg:mt-7 text-[#666A7B]'> 79 V Mall, Western Express Hwy, Thakur Complex, <br /> Kandivali East, Mumbai, MH 400101, India.</p>
                </div>
            </div>

            <hr className='my-8' />

            <div className='text-center text-sm font-semibold'>
                <p>&#169; 2022 Bonnie Hong. All Rights Reserved.</p>

            </div>



        </div>
    );
};

export default Footer;