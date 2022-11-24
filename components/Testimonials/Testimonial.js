import Image from 'next/image';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Testimonial = ({ testimonial }) => {
    const { name, review, img, ratings } = testimonial;
    return (
        <div className='bg-[#F4F7F2] p-8 rounded-lg shadow-lg w-[526px]  text-center my-5'>
            <div className='flex items-center justify-center'>
                <AiFillStar className='text-xl' />
                <AiFillStar className='text-xl' />
                <AiFillStar className='text-xl' />
                <AiFillStar className='text-xl' />
                <AiFillStar className='text-xl' />
            </div>
            <p className='text-[#666A7B] mt-6 text-xl font-semibold'>{review}</p>

            <div className='flex flex-col items-center  mt-12'>
                <Image src={img} width={64} height={64} alt="reviewer" />
                <h3 className='text-base font-semibold mt-3'>{name}</h3>
            </div>


        </div>
    );
};

export default Testimonial;