import Image from 'next/image';
import React from 'react';

const Service = ({ service }) => {
    const { name, desc, icon } = service;
    return (
        <div className='bg-[#F4F7F2] p-7 rounded-lg shadow-lg h-[298px]'>
            <div className='flex items-center gap-4'>
                <Image src={icon} width={80} height={80} alt="" />
                <h3 className='text-2xl font-semibold'>{name}</h3>
            </div>

            <p className='text-[#666A7B] mt-7'>{desc}</p>
        </div>
    );
};

export default Service;