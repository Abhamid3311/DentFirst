import Image from 'next/image';
import React from 'react';
import banner1 from '/public/assets/banner-0.png'
import banner2 from '/public/assets/banner-1.png'
import banner3 from '/public/assets/banner-2.png'
import banner4 from '/public/assets/banner-3.png'

const Banner = () => {
    return (
        <div className='bg-[#f4f7f2] text-center pt-16 px-14 mb-14'>
            <div className='flex flex-col items-center justify-between'>
                <h2 className='text-4xl lg:text-6xl leading-[50px] lg:leading-[80px] font-bold pt-8'>We Are Ready To Help & <span className='text-[#64A665]'>Take Care Of <br /> Your Dental Health</span></h2>

                <p className='mt-8 text-[#666A7B]'>We will help to treat your teeth with a satisfying experience and <br /> professional service by an expert doctor.</p>

                <button className='py-4 px-10 bg-[#64A665] text-white rounded-lg mt-12 font-bold hover:bg-[#666A7B] hover:text-white '>Request an Appointment</button>
            </div>

            <div className='flex flex-col lg:flex-row items-center justify-center gap-5 w-full pt-14'>
                <Image src={banner1} w-full h-full alt='banner img' />
                <div className='flex gap-5 flex-col lg:flex-row'>
                    <div className='flex flex-col items-center gap-5 h-full '>
                        <Image src={banner2} w-full h-full alt='banner img' />
                        <Image src={banner3} w-full h-full alt='banner img' />
                    </div>
                    <Image src={banner4} w-full h-full alt='banner img' />
                </div>
            </div>

        </div>
    );
};

export default Banner;