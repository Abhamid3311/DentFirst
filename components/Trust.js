import Image from 'next/image';
import React from 'react';
import plus from '/public/assets/plus.png'

const Trust = () => {
    return (
        <div className='bg-[#fafafa] pt-10 mb-10 relative'>

            <Image src={plus} alt="" width={208} height={208} className="trust-plus-img-left hidden lg:block" />
            <Image src={plus} alt="" width={256} height={256} className="trust-plus-img-right hidden lg:block" />

            <div className='bg-[#64A665] text-white p-10 lg:px-14 w-[90vw] mx-auto lg:h-[280px]  mt-12 rounded-xl grid justify-content-center '>
                
                <div className='flex flex-col lg:flex-row items-center justify-between px-10 trust-bg'>
                    <h2 className='text-4xl font-semibold leading-[48px]'>Start Now And Trust Us About Your <br /> Dental Compaints</h2>

                    <button className=' py-4 px-10 bg-white text-[#64A665] rounded-lg mt-12 font-bold  hover:bg-[#666A7B] hover:text-white '>Request an Appointment</button>
                </div>

            </div>
        </div>
    );
};

export default Trust;